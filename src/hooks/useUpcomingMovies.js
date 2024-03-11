import { MOVIES_OPTIONS } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();
	const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
	const getUpcomingMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/upcoming?page=1",
				MOVIES_OPTIONS
			);
			const json = await response.json();
			dispatch(addUpcomingMovies(json.results));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		!upcomingMovies && getUpcomingMovies();
	}, []);
};

export default useUpcomingMovies;
