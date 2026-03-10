export type Lang = 'en' | 'pt' | 'es' | 'th' | 'ph';

export interface Translations {
	questions: { q: string; a: string[] }[];
	ui: {
		loaderText: string;
		ctaBtn: string;
		utpItems: [string, string, string, string];
		disclaimer: string;
		quoteText: string;
		quoteAuthor: string;
		quoteRole: string;
		questionLabel: string;
		questionOf: string;
		nextBtn: string;
		matchScore: string;
		goToSite: string;
		tryAgain: string;
		backToStart: string;
		title: [string, string];
	};
}
