import React from "react";

const Shimmer = () => {
	return (
		<div>
			{Array(4)
				.fill("")
				.map((el, idx) => {
					return (
						<div key={"shimmer" + idx} className="p-3 w-full">
							<h1 className="animate-pulse bg-gradient-to-r from-white text-lg sm:text-xl md:text-2xl font-bold my-1 h-7 w-[60%] sm:w-40% md:w-[33%]  rounded-lg"></h1>
							<div className="flex justify-start items-start gap-2 sm:gap-3 overflow-x-scroll w-full no-scrollbar-custom">
								{Array(Math.floor(Math.random() * 8) + 2)
									.fill("")
									.map((el, idx) => {
										return (
											<div
												key={"shimmerCard" + idx}
												className="sm:h-80 md:h-96 mt-2 hover:-translate-y-5 sm:hover:-translate-y-8 hover:scale-90 transition-all py-4"
											>
												<div className="animate-pulse bg-gradient-to-r from-white cursor-pointer rounded-lg h-52 sm:h-64 md:h-72 w-32 sm:w-40 md:w-48"></div>
												<p className="animate-pulse bg-gradient-to-r from-white font-semibold text-xs md:text-sm line-clamp-2 w-32 sm:w-40 md:w-48 h-4 my-1 rounded-lg "></p>
												<p className="animate-pulse bg-gradient-to-r from-white font-light text-xs md:text-sm w-[75%] h-3 rounded-lg "></p>
											</div>
										);
									})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Shimmer;
