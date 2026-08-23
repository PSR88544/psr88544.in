export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

export const showcase: ShowcaseItem[] = [
	{
		name: "tictactoe",
		href: "https://github.com/PSR88544/tictactoe",
		stack: "Python · SocketIO · Flask · Javascript",
		desc: "A web app is intended to be the online classical Tic Tac Toe game.",
	},
	{
		name: "Report Generator",
		href: "https://github.com/PSR88544/Report-Generator",
		stack: "Python · LLMs",
		desc: "A tool that can automatically generate high-quality reports based on LLM technologies such as OpenAI's GPT-3 language model.",
	},
];
