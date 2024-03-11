import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_CODE } from "../../utils/constants/constants";
import { toggleGptSarch } from "../../utils/slices/gptSlice";
import { changeConfig, setConfirm } from "../../utils/slices/configSlice";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
const HeaderHide = ({ setHeaderHide, imgRef }) => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const gptSearch = useSelector((store) => store.gpt.gptSearchPage);
	const configLang = useSelector((store) => store.config.lang);
	const menuRef = useRef();
	const handleSignOut = () => {
		toast.loading("Wait until you SignOut");
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				toast.dismiss();
				toast.success("User has been Signed Out");
			})
			.catch((error) => {
				// An error happened.
				// navigate("/error");
				toast.dismiss();
				toast.error("Something went wrong!");
			});
	};
	const handleConfigLang = (e) => {
		dispatch(changeConfig(e.target.value));
		setHeaderHide(true);
	};
	const handleGptSearchPage = () => {
		dispatch(toggleGptSarch());
		setHeaderHide(true);
	};
	useEffect(() => {
		let handler = (e) => {
			if (
				!menuRef.current.contains(e.target) &&
				!imgRef.current.contains(e.target)
			) {
				setHeaderHide(true);
			}
		};

		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);
	const handleDeleteAc = () => {
		dispatch(setConfirm(true));
		setHeaderHide(true);
		const scrollY =
			document.documentElement.style.getPropertyValue("--scroll-y");
		const body = document.body;
		body.style.position = "fixed";
		body.style.width = "100vw";
		body.style.top = `-${scrollY}`;
	};

	return (
		<>
			<div
				ref={menuRef}
				className="absolute right-0 top-8 sm:top-10 bg-black/90 border border-gray-300 p-5 rounded-lg w-44 flex flex-col gap-4 items-center z-[1000]"
			>
				<span className="w-28 text-center border-b text-white font-bold ">
					<span className="text-green-500">Hi!</span>{" "}
					{user?.displayName?.split(" ")[0]}
				</span>
				<button
					className={
						gptSearch
							? "w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400/80 text-black  hover:bg-purple-600 hover:text-white active:bg-purple-950"
							: "w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400/80 text-black  hover:bg-teal-600 hover:text-white active:bg-teal-950"
					}
					onClick={handleGptSearchPage}
				>
					{gptSearch ? "Home Page" : "Gpt Search"}
				</button>
				{gptSearch && (
					<select
						className="w-28 text-black bg-gray-400/80 border rounded-md hover:border-gray-400 border-white py-2 text-center cursor-pointer outline-none"
						onChange={handleConfigLang}
						value={configLang}
					>
						{LANGUAGE_CODE.map((lang) => (
							<option key={lang.name} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				)}
				<button
					className="w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400 text-black  hover:bg-red-600 hover:text-white active:bg-red-950"
					onClick={handleSignOut}
				>
					Logout
				</button>
				<button
					className="w-28 h-10 font-normal border hover:border-gray-400 border-white rounded-md bg-gray-400 text-black  hover:bg-red-600 hover:text-white active:bg-red-950"
					onClick={handleDeleteAc}
				>
					Delete Ac.
				</button>
			</div>
		</>
	);
};
export default HeaderHide;
