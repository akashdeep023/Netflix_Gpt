import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const mainMovies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!mainMovies)
		return (
			<div className="bg-black text-white h-screen text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold flex flex-col justify-center items-center p-4">
				<div class="loading-wave">
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
				</div>
				<h2 className="text-center">
					Use VPN otherwise movies won't show up...😊
				</h2>
			</div>
		);
	const { title, overview, id } = mainMovies[1];
	return (
		<div className="bg-black">
			<VideoTitle
				title={title}
				description={overview}
				mainMovies={mainMovies[1]}
			/>
			<VideoBackground videoId={id} />
		</div>
	);
};

export default MainContainer;
