import React from "react";
import { CDN_IMG_URL } from "../../utils/constants/constants";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../../utils/slices/moviesSlice";

const MoviesCard = ({ movies }) => {
	const dispatch = useDispatch();
	const handleMovieInfoPage = (movie) => {
		dispatch(addMovieInfo(movie));
		const scrollY =
			document.documentElement.style.getPropertyValue("--scroll-y");
		const body = document.body;
		body.style.position = "fixed";
		body.style.width = "100vw";
		body.style.top = `-${scrollY}`;
	};

	return (
		<div className="flex justify-start items-start gap-2 sm:gap-3 overflow-x-scroll w-full no-scrollbar-custom">
			{movies?.map((movie) => {
				if (!movie.poster_path) return null;
				return (
					<div
						onClick={() => handleMovieInfoPage(movie)}
						key={movie.id}
						className="h-72 sm:h-80 md:h-96 mt-2 hover:-translate-y-5 sm:hover:-translate-y-8 hover:scale-90 transition-all py-4"
					>
						<div className="bg-gradient-to-r from-white rounded-lg h-52 sm:h-64 md:h-72 w-32 sm:w-40 md:w-48 ">
							<img
								className="object-cover cursor-pointer rounded-lg h-52 sm:h-64 md:h-72"
								src={CDN_IMG_URL + movie.poster_path}
								alt={movie.original_title}
							/>
						</div>
						<p className="text-gray-300 font-semibold text-xs md:text-sm line-clamp-1 w-32 sm:w-40 md:w-48">
							{movie.title}
						</p>
						<p className="text-gray-300 font-light text-xs md:text-sm">
							{movie.release_date}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default MoviesCard;
