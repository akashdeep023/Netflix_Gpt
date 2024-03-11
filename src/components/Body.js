import React, { useEffect } from "react";
import Login from "./page/Login";
import Browse from "./page/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
]);

const Body = () => {
	// setProperty
	useEffect(() => {
		const handle = () => {
			document.documentElement.style.setProperty(
				"--scroll-y",
				`${window.scrollY}px`
			);
		};
		window.addEventListener("scroll", handle);
		return () => window.removeEventListener("scroll", handle);
	}, []);
	return (
		<div>
			<ToastContainer
				position="top-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				stacked
				limit={3}
				toastStyle={{ border: "1px solid #dadadaaa" }}
				// transition:Bounce
			/>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
