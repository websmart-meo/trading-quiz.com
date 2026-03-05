import type { Translations } from './types';

const es: Translations = {
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
		loaderText: 'Finding your match…'
	}
};

export default es;
