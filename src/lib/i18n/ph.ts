import type { Translations } from './types';

const ph: Translations = {
	questions: [
		{ q: 'Ang iyong edad', a: ['18-25', '26-35', '36-45', '45+'] },
		{
			q: 'Ang iyong karanasan sa pangangalakal',
			a: [
				'Baguhan ako',
				'Propesyonal na trader ako',
				'Alam ko ang pangangalakal, ngunit kailangan ng pagsasanay sa demo account'
			]
		},
		{ q: 'Ano ang iyong badyet sa pangangalakal?', a: ['$10', '$100', '$500', '$1000+'] },
		{
			q: 'Ano ang pinakamahalaga sa iyo?',
			a: ['Katatagan', 'Balanse ng panganib/kita', 'Pinakamataas na kita', 'Paglago ng kapital']
		},
		{
			q: 'Anong mga asset ang mas madalas mong i-trade?',
			a: ['Forex', 'Stocks', 'Mga Cryptocurrency', 'Mga kalakal (ginto, langis, atbp.)']
		}
	],
	ui: {
		loaderText: 'Hinahanap ang iyong tugma…',
		ctaBtn: 'Subukan mo mismo',
		utpItems: ['1 minuto', '5 tanong', 'Walang kinakailangang pagpaparehistro', 'Walang kinakailangang deposito'],
		disclaimer: 'Ang tugma ay para sa impormasyon lamang at hindi isang rekomendasyon sa pamumuhunan',
		quoteText: 'Ang pinakamainam na oras para mag-invest ay kahapon. Ang pangalawang pinakamainam na oras ay ngayon. Mas maaga kang magsimulang mag-invest, mas mabuti.',
		quoteAuthor: 'Warren Buffett',
		quoteRole: 'Negosyante at mamumuhunan',
		questionLabel: 'Tanong',
		questionOf: 'ng',
		nextBtn: 'Susunod',
		matchScore: 'Marka ng Tugma',
		goToSite: 'Pumunta sa site',
		tryAgain: 'Subukan muli',
		backToStart: 'Bumalik sa simula',
		title: ['Investment', 'Matchmaker']
	}
};

export default ph;
