import { MOVIES_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();
	const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
	const getTopRatedMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?page=1",
				MOVIES_OPTIONS
			);
			const json = await response.json();
			dispatch(addTopRatedMovies(json.results));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		!topRatedMovies && getTopRatedMovies();
	}, []);
};

export default useTopRatedMovies;
