import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesPlayer = ({ title, movies }) => {
	return (
		<div className="p-3 w-full">
			<h1 className="text-lg sm:text-xl md:text-2xl font-bold my-1">
				{title}
			</h1>
			<MoviesCard movies={movies} />
		</div>
	);
};

export default MoviesPlayer;
