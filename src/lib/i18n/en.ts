import type { Translations } from './types';

const en: Translations = {
	questions: [
		{ q: 'Your Age', a: ['18-25', '26-35', '36-45', '45+'] },
		{
			q: 'Your Trading experience',
			a: ['I am beginner', 'I am pro trader', 'I know how to trade, but need practice on demo account']
		},
		{ q: 'What is your trading budget?', a: ['$10', '$100', '$500', '$1000+'] },
		{
			q: 'What matters most to you?',
			a: ['Stability', 'Risk/return balance', 'Maximum profit', 'Capital growth']
		},
		{
			q: 'Which assets do you trade more often?',
			a: ['Forex', 'Stocks', 'Cryptocurrencies', 'Commodities (gold, oil, etc.)']
		}
	],
	ui: {
		loaderText: 'Finding your match…',
		ctaBtn: 'Try yourself',
		utpItems: ['1 minute', '5 questions', 'No registration required', 'No deposit required'],
		disclaimer: 'The match is informational and not an investment recommendation',
		quoteText: 'The best time to invest was yesterday. The second best time is now. The sooner you start investing, the better.',
		quoteAuthor: 'Warren Buffett',
		quoteRole: 'Entrepreneur and investor',
		questionLabel: 'Question',
		questionOf: 'of',
		nextBtn: 'Next',
		matchScore: 'Match Score',
		goToSite: 'Go to the site',
		tryAgain: 'Try again',
		backToStart: 'Back to start',
		title: ['Investment', 'Matchmaker']
	}
};

export default en;
