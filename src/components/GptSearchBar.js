import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { MOVIES_OPTIONS } from "../utils/constants";
import { setGptMoviesSearch, setGptSearchBtnClicked } from "../utils/gptSlice";

const GptSearchBar = () => {
	const langCode = useSelector((store) => store.config.lang);
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const handletmdbMoviesSearch = async (movie) => {
		try {
			const data = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
				MOVIES_OPTIONS
			);
			const movies = await data.json();
			return movies.results;
		} catch (err) {
			console.error(err);
		}
	};

	const handleGptMoviesSearch = async () => {
		try {
			dispatch(setGptSearchBtnClicked());
			dispatch(
				setGptMoviesSearch({
					gptSearchNames: null,
					gptSearchMovies: null,
				})
			);
			const query =
				"Act as a Movie Recommendation system and suggest some movies for the query : " +
				searchText.current.value +
				". only give me names of 5 movies, comma seperated like the example result given ahead. Example is : Koi mil gya, Hera feri, Kabhi kushi kabhi gam, Dilwale, Dune";
			const gptSearch = await openai.chat.completions.create({
				messages: [{ role: "user", content: query }],
				model: "gpt-3.5-turbo",
			});
			const getMovies = gptSearch.choices[0].message.content.split(",");
			const promisesMovies = getMovies.map((movie) =>
				handletmdbMoviesSearch(movie)
			);
			const tmdbMoviesSearch = await Promise.all(promisesMovies);
			dispatch(
				setGptMoviesSearch({
					gptSearchNames: getMovies,
					gptSearchMovies: tmdbMoviesSearch,
				})
			);
		} catch (err) {
			console.error("Please try again in 20s.");
			alert("Please try again in 20s.");
		}
	};
	return (
		<>
			<div className="h-28 sm:h-32 md:h-40"></div>
			<div className=" flex justify-center sticky  top-[70px] md:top-20 z-30 px-2 sm:p-0">
				<form
					className="grid grid-cols-12 w-full sm:w-[70%] md:w-[50%] bg-black/60 p-3 rounded-full font-normal text-base sm:text-lg"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						ref={searchText}
						className="col-span-9 px-6 py-2 rounded-s-full text-center text-black outline-none"
						type="text"
						placeholder={lang[langCode].placeholder}
					/>
					<button
						className="col-span-3 rounded-r-full bg-red-700 hover:border-red-800 active:bg-red-900 outline-none"
						onClick={() => handleGptMoviesSearch()}
					>
						{lang[langCode].search}
					</button>
				</form>
			</div>
		</>
	);
};

export default GptSearchBar;
