import React from "react";
import { useDispatch } from "react-redux";
import { addMovieInfo, setMovieInfoTrailerPage } from "../utils/moviesSlice";

const VideoTitle = ({ title, description, mainMovies }) => {
	const dispatch = useDispatch();
	const handleMovieInfoPage = () => {
		dispatch(addMovieInfo(mainMovies));
	};
	const handleMovieInfoVideo = () => {
		dispatch(addMovieInfo(mainMovies));
		dispatch(setMovieInfoTrailerPage(true));
	};
	return (
		<div className="absolute top-10 sm:top-2 md:-top-5 left-0 z-20 flex flex-col justify-center bottom-0 w-full pl-4 sm:pl-6 md:pl-10 aspect-video bg-gradient-to-t from-black from-10%">
			<div className="w-2/3 sm:w-1/2 md:w-1/3">
				<h1
					className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap"
					style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
				>
					{title}
				</h1>
				<p
					className="hidden sm:visible max-h-24 h-fit sm:line-clamp-2 md:line-clamp-4 mb-3 text-sm text-white"
					style={{ filter: "drop-shadow(2px 4px 1.5px black)" }}
				>
					{description}
				</p>
				<button
					onClick={handleMovieInfoVideo}
					className="my-4 px-2 sm:px-4 md:px-6  py-1 sm:py-2  bg-white text-black rounded-md cursor-pointer border border-black font-semibold sm:text-base md:text-lg text-sm "
				>
					▶️ Play
				</button>
				<button
					onClick={handleMovieInfoPage} //hidden sm:inline
					className=" px-2 sm:px-2 md:px-4 py-1 sm:py-2 bg-black/30 rounded-md cursor-pointer border border-slate-500 font-semibold sm:text-base md:text-lg text-sm ms-2"
				>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
