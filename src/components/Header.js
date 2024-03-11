import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { APP_LOGO } from "../utils/constants/constants";
import { toggleHomePage } from "../utils/slices/gptSlice";
import HeaderHide from "./subComponents/HeaderHide";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const [headerhide, setHeaderHide] = useState(true);
	const imgRef = useRef();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);

	const handleGptHomePage = () => {
		dispatch(toggleHomePage());
	};

	return (
		<div className="fixed top-0 z-50 h-20 px-3 sm:px-[10%] filter flex justify-between items-center w-full bg-gradient-to-b from-black from-40% to-transparent">
			<Link to="/">
				<img
					onClick={handleGptHomePage}
					className="w-40 sm:w-48 contrast-200"
					src={APP_LOGO}
					alt="logo"
				/>
			</Link>
			{user?.photoURL && (
				<div className="relative flex place-items-center justify-center">
					{headerhide ? (
						<i className="h-3 mt-1 opacity-50 fa-solid fa-sort-up"></i>
					) : (
						<i className="h-3 mt-1 opacity-50 fa-solid fa-sort-down"></i>
					)}
					<img
						ref={imgRef}
						className="h-10 w-10 ml-1 sm:h-12 sm:w-12 rounded-lg cursor-pointer contrast-200"
						src={user.photoURL}
						alt="userLogo"
						onClick={() => setHeaderHide(!headerhide)}
					/>
					<div
						className={
							headerhide
								? "invisible opacity-0 scale-50 transition-all"
								: "inline-block opacity-100 scale-100 transition-all"
						}
					>
						<HeaderHide
							setHeaderHide={setHeaderHide}
							imgRef={imgRef}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
