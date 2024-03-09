import OpenAI from "openai";
import { OPAINAI_KEY } from "./constants";

const openai = new OpenAI({
	// apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
	apiKey: OPAINAI_KEY,
	dangerouslyAllowBrowser: true,
});

export default openai;
