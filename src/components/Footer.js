import React from "react";
import { LANGUAGE_CODE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeConfig } from "../utils/configSlice";
import lang from "../utils/langConstants";

const Footer = () => {
	const dispatch = useDispatch();
	const langCode = useSelector((store) => store.config.lang);
	const configLang = useSelector((store) => store.config.lang);
	const handleConfigLang = (e) => {
		dispatch(changeConfig(e.target.value));
	};
	return (
		<div className="relative">
			<div className="absolute bottom-0 w-full ps-10 sm:ps-[10%] py-10 sm:py-16 flex flex-col items-start justify-center gap-8 bg-black/70  text-white ">
				<div>{lang[langCode].footer.ques}</div>
				<ul className="flex flex-wrap justify-start font-light underline decoration-from-font">
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8  ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.faq}
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.help}
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.term}
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.privacy}
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.cookie}
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							{lang[langCode].footer.corporate}
						</span>
					</li>
				</ul>
				<div className="flex flex-nowrap items-center justify-between">
					<select
						name="language"
						className="max-h-11 sm:mr-4 outline-none py-2 ps-4 bg-black font-semibold border border-gray-400 rounded-md cursor-pointer"
						onChange={handleConfigLang}
						value={configLang}
					>
						{LANGUAGE_CODE.map((lang) => (
							<option key={lang.name} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
					<div class="flex flex-nowrap h-14 w-full items-center justify-center">
						<a
							className="ms-1 h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.linkedin.com/in/akashdeep023/"
						>
							<img
								className="h-8 w-8 sm:h-10 sm:w-10 m-1 sm:hover:h-12 sm:hover:w-12 transition-all"
								src="/linkedIn.png"
								alt="LinkedIn"
							/>
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.instagram.com/akashdeep023_/"
						>
							<img
								className="h-8 w-8 sm:h-10 sm:w-10 m-1 sm:hover:h-12 sm:hover:w-12 transition-all"
								src="/instagram.png"
								alt="Instagram"
							/>
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://github.com/akashdeep023/"
						>
							<img
								className="h-8 w-8 sm:h-10 sm:w-10 m-1 sm:hover:h-12 sm:hover:w-12 transition-all bg-white rounded-lg"
								src="/github.png"
								alt="GitHub"
							/>
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.facebook.com/akashdeep023/"
						>
							<img
								className="h-8 w-8 sm:h-9 sm:w-9 m-1 sm:hover:h-11 sm:hover:w-11 transition-all"
								src="/facebook.png"
								alt="Facebook"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
