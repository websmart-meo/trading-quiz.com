export default [
	{
		q: 'Your Age',
		a: ['18-25', '26-35', '36-45', '45+']
	},
	{
		q: 'Your Trading experience',
		a: [
			'I am beginner',
			'I am pro trader',
			'I know how to trade, but need practice on demo account'
		]
	},
	{ q: 'What is your trading budget?', a: ['10$', '100$', '500$', '1000$+'] },
	{
		q: 'What matters most to you?',
		a: ['Stability', 'Risk/return balance', 'Maximum profit', 'Capital growth']
	},
	{
		q: 'Which assets do you trade more ofter?',
		a: ['Forex', 'Stocks', 'Cryptocurrencies', 'Commodities (gold, oil, etc.)']
	}
];

// Investment matchmaker

// IQ = 95%
// Exnova = 86%
// Casa = 79%
// Capital Bear = 60%
// IQ Broker =72%

export const brandsData = [
	{
		brand: 'IQ Option',
		percent: '95',
		link: 'https://brokeriqoption.com/en/register',
		afftrack: 'iqbutton'
	},
	{
		brand: 'Exnova',
		percent: '86',
		link: 'https://trade.exnova.com/en/register',
		afftrack: 'exnovabutton'
	},
	{
		brand: 'CasaTrade',
		percent: '79',
		link: 'https://trade.casatrade.com/en/register',
		afftrack: 'casabutton'
	},
	{
		brand: 'Capital Bear',
		percent: '60',
		link: 'https://trade.capitalbear.com/en/register',
		afftrack: 'capitalbbutton'
	},
	{
		brand: 'IQ Broker',
		percent: '72',
		link: 'https://trade.iqbroker.com/en/register',
		afftrack: 'iqbrokerbutton'
	}
];
