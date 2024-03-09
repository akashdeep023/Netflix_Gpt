import React from "react";
import { useSelector } from "react-redux";
import MoviesPlayer from "./MoviesPlayer";
import Shimmer from "./Shimmer";

const GptContant = () => {
	const { gptSearchNames, gptSearchMovies, gptSearchBtnClicked } =
		useSelector((store) => store.gpt);
	if (!gptSearchBtnClicked) return null;

	return (
		<div className="min-h-full px-[4%] py-[2%]">
			<div className=" w-full p-1  md:p-4 backdrop-blur-lg relative">
				{gptSearchBtnClicked &&
					(!(gptSearchNames == null) && gptSearchBtnClicked ? (
						gptSearchNames.map((moviesName, idx) => (
							<MoviesPlayer
								key={moviesName}
								title={moviesName}
								movies={gptSearchMovies[idx]}
							/>
						))
					) : (
						<Shimmer />
					))}
			</div>
		</div>
	);
};

export default GptContant;

// Not working shimmer che gptcontant
