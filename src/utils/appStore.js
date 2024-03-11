import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
	reducer: {
		user: useReducer,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configReducer,
	},
});
export default appStore;
