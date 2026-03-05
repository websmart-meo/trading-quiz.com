export type Lang = 'en' | 'pt' | 'es' | 'th';

export interface Translations {
	questions: { q: string; a: string[] }[];
	ui: {
		loaderText: string;
	};
}
