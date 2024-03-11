import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",
	initialState: {
		lang: "en",
		confirm: false,
		forgotPass: false,
	},
	reducers: {
		changeConfig: (state, action) => {
			state.lang = action.payload;
		},
		setConfirm: (state, action) => {
			state.confirm = action.payload;
		},
		setForgotPass: (state, action) => {
			state.forgotPass = action.payload;
		},
	},
});

export const { changeConfig, setConfirm, setForgotPass } = configSlice.actions;

export default configSlice.reducer;
