import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/slices/moviesSlice";
import { MOVIES_OPTIONS } from "../utils/constants/constants";

const useMovieTrailer = (videoId) => {
	const dispatch = useDispatch();
	const trailerVideos = useSelector((store) => store.movies.trailerVideos);
	const getVideo = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/" +
					videoId +
					"/videos?language=en-US",
				MOVIES_OPTIONS
			);
			const data = await response.json();
			const filterData = data.results?.filter(
				(data) => data.type === "Trailer"
			);
			const trailer = filterData.length ? filterData[0] : data.results[0];
			// console.log(trailer);
			dispatch(addTrailerVideos(trailer));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		!trailerVideos && getVideo();
	}, []);
};
export default useMovieTrailer;
