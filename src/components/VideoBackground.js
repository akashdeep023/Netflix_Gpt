import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ videoId }) => {
	const trailerVideos = useSelector((store) => store.movies?.trailerVideos);
	useMovieTrailer(videoId);
	return (
		<div className="bg_utube w-full h-full overflow-hidden">
			<iframe
				className="w-full aspect-video overflow-hidden"
				src={
					"https://www.youtube.com/embed/" +
					trailerVideos?.key +
					"?autoplay=1&mute=1&controls=0&showinfo=0"
				}
				// title="YouTube video player"
				// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
