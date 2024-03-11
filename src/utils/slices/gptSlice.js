import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		gptSearchPage: false,
		gptSearchNames: null,
		gptSearchMovies: null,
		gptSearchBtnClicked: false,
	},
	reducers: {
		toggleGptSarch: (state, action) => {
			state.gptSearchPage = !state.gptSearchPage;
		},
		toggleHomePage: (state) => {
			state.gptSearchPage = false;
		},
		setGptMoviesSearch: (state, action) => {
			const { gptSearchNames, gptSearchMovies } = action.payload;
			state.gptSearchNames = gptSearchNames;
			state.gptSearchMovies = gptSearchMovies;
		},
		setGptSearchBtnClicked: (state, action) => {
			state.gptSearchBtnClicked = true;
		},
	},
});
export const {
	toggleGptSarch,
	toggleHomePage,
	setGptMoviesSearch,
	setGptSearchBtnClicked,
} = gptSlice.actions;
export default gptSlice.reducer;
