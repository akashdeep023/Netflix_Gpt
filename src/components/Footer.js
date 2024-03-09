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
				<div>
					<select
						name="language"
						className="outline-none py-2 ps-4 bg-black font-semibold border border-gray-400 rounded-md cursor-pointer"
						onChange={handleConfigLang}
						value={configLang}
					>
						{LANGUAGE_CODE.map((lang) => (
							<option key={lang.name} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default Footer;
