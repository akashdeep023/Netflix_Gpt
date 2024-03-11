import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import MainContainer from "../movies/MainContainer";
import SecondaryContainer from "../movies/SecondaryContainer";
import { useSelector } from "react-redux";
import GptContainer from "../gpt/GptContainer";
import MovieInfo from "../movies/MovieInfo";
import Confirm from "../subComponents/Confirm";

const Browse = () => {
	const gptSearchPage = useSelector((store) => store.gpt.gptSearchPage);
	const { page } = useSelector((store) => store.movies?.movieInfo);
	const confirm = useSelector((store) => store.config?.confirm);
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	return (
		<div className="bg-black min-h-screen min-w-screen text-white">
			<Header />
			{gptSearchPage ? (
				<GptContainer />
			) : (
				<div className="">
					<MainContainer />
					<SecondaryContainer />
				</div>
			)}
			{page && (
				<div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
					<MovieInfo />
				</div>
			)}
			{confirm && (
				<div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
					<Confirm />
				</div>
			)}
		</div>
	);
};

export default Browse;
