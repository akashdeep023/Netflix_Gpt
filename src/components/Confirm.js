import React from "react";
import { useDispatch } from "react-redux";
import { setConfirm } from "../utils/configSlice";
import { toast } from "react-toastify";
import { deleteUser } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Confirm = () => {
	const dispatch = useDispatch();
	const haddleCancleBtn = () => {
		dispatch(setConfirm(false));
		const body = document.body;
		const scrollY = body.style.top;
		body.style.width = "";
		body.style.position = "";
		body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
	};
	const Curruser = auth.currentUser;
	const haddleConfirmBtn = (e) => {
		toast.loading("Wait until user is deleted");
		e.target.disabled = true;
		const body = document.body;
		const scrollY = body.style.top;
		body.style.width = "";
		body.style.position = "";
		body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
		deleteUser(Curruser) // delete user
			.then(() => {
				// User deleted.
				toast.dismiss();
				toast.success("Your account has been Deleted.");
				dispatch(removeUser());
				dispatch(setConfirm(false));
			})
			.catch((error) => {
				// An error ocurred
				toast.dismiss();
				toast.error("Error : " + error.code);
				e.target.disabled = false;
				// ...
			});
	};
	return (
		<div className="relative bg-black mx-auto max-h-80 w-[95%] max-w-[450px] sm:w-[80%] md:w-1/2 rounded-lg aspect-video border border-gray-400 flex justify-center items-center">
			<div className="flex flex-col gap-5 m-3">
				<h4 className="text-lg sm:text-xl md:text-2xl font-bold my-2 mb-1 sm:mb-3 text-center">
					Are you sure User was deleted?
				</h4>
				<div className="flex justify-between items-center">
					<button
						onClick={haddleCancleBtn}
						className="rounded-sm w-28 h-10 p-2 my-1 bg-green-600 hover:bg-green-700 active:bg-green-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
					>
						Cancel
					</button>
					<button
						onClick={haddleConfirmBtn}
						className="rounded-sm w-28 h-10 p-2 my-1 bg-red-600 hover:bg-red-700 active:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
