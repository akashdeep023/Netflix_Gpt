import React, { useRef, useState } from "react";
import lang from "../../utils/constants/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { setForgotPass } from "../../utils/slices/configSlice";
import { checkValidForgotFrom } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPass = () => {
	const email = useRef(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const langCode = useSelector((store) => store.config.lang);
	const dispatch = useDispatch();
	const handleCancleBtn = () => {
		dispatch(setForgotPass(false));
		const body = document.body;
		const scrollY = body.style.top;
		body.style.width = "";
		body.style.position = "";
		body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
	};
	const handleForgotBtn = (e) => {
		const message = checkValidForgotFrom(
			email.current.value
			// password.current.value
		); // Validate Form
		setErrorMsg(message); // Set error message
		if (message) return;
		toast.loading("Wait for message to be sent");
		e.target.disabled = true;

		sendPasswordResetEmail(auth, email.current.value)
			.then(() => {
				// Password reset email sent!
				toast.dismiss();
				toast.success("Message sent successfully");
				e.target.disabled = false;
				dispatch(setForgotPass(false));
				const body = document.body;
				const scrollY = body.style.top;
				body.style.width = "";
				body.style.position = "";
				body.style.top = "";
				window.scrollTo(0, parseInt(scrollY || "0") * -1);
			})
			.catch((error) => {
				setErrorMsg("Error : " + error.code);
				toast.dismiss();
				toast.error("Error : " + error.code);
				e.target.disabled = false;
			});
	};
	return (
		<div className="relative bg-black mx-auto max-h-80 w-[95%] max-w-[450px] sm:w-[80%] md:w-1/2 rounded-lg aspect-video border border-gray-400 flex justify-center items-center text-white">
			<div className="flex flex-col gap-5 m-3 w-[90%] sm:w-[80%]">
				<h4 className="text-lg sm:text-xl md:text-2xl font-bold my-2 mb-1 sm:mb-3 text-center">
					{lang[langCode].login.forgot}
				</h4>
				<div className="flex gap-3 flex-col justify-between items-center w-full">
					<input
						ref={email}
						type="text"
						placeholder={lang[langCode].login.email}
						className="rounded-md w-full h-full p-3 font-semibold bg-black/50 border border-gray-200/50"
					/>
					{errorMsg && (
						<p className="text-red-500 h-3 -mt-1 font-semibold">
							{errorMsg}
						</p>
					)}
					<div className="flex justify-between items-center w-full">
						<button
							type="submit"
							className="rounded-sm w-28 h-10 p-2 my-1 bg-green-600 hover:bg-green-700 active:bg-green-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
							onClick={handleCancleBtn}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-sm w-28 h-10 p-2 my-1 bg-red-600 hover:bg-red-700 active:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
							onClick={handleForgotBtn}
						>
							Forgot
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPass;
