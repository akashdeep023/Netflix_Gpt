export const APP_BG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const APP_LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_LOGO =
	"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const MOVIES_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_MOVIES_OPTIONS,
	},
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const OPAINAI_KEY = process.env.REACT_APP_OPAINAI_KEY;

export const LANGUAGE_CODE = [
	{
		code: "en",
		name: "English",
	},
	{
		code: "hi",
		name: "Hindi",
	},
	{
		code: "es",
		name: "Spanish",
	},
	{
		code: "ta",
		name: "Tamil",
	},
	{
		code: "te",
		name: "Telugu",
	},
	{
		code: "gu",
		name: "Gujarati",
	},
	{
		code: "bn",
		name: "Bangla",
	},
];
