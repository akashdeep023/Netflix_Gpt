import React from "react";
import { useSelector } from "react-redux";
import MoviesPlayer from "./MoviesPlayer";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	if (!movies?.nowPlayingMovies) return;
	return (
		<div className="px-1 sm:px-4 md:px-8 relative -mt-[10px] sm:-mt-[100px] md:-mt-[20%] z-40">
			<MoviesPlayer
				title={"Now Player Movies"}
				movies={movies.nowPlayingMovies}
			/>
			<MoviesPlayer
				title={"Top Rated Movies"}
				movies={movies.topRatedMovies}
			/>
			<MoviesPlayer
				title={"Popular Movies"}
				movies={movies.popularMovies}
			/>
			<MoviesPlayer
				title={"Upcoming Movies"}
				movies={movies.upcomingMovies}
			/>
		</div>
	);
};

export default SecondaryContainer;
