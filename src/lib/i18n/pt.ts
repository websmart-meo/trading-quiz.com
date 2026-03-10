import type { Translations } from './types';

const pt: Translations = {
	questions: [
		{ q: 'A sua idade', a: ['18-25', '26-35', '36-45', '45+'] },
		{
			q: 'A sua experiência em trading',
			a: [
				'Sou iniciante',
				'Sou um trader profissional',
				'Sei como negociar, mas preciso praticar numa conta demo'
			]
		},
		{ q: 'Qual é o seu orçamento para trading?', a: ['$10', '$100', '$500', '$1000+'] },
		{
			q: 'O que é mais importante para si?',
			a: [
				'Estabilidade',
				'Equilíbrio entre risco e retorno',
				'Lucro máximo',
				'Crescimento do capital'
			]
		},
		{
			q: 'Que ativos negocia com mais frequência?',
			a: ['Forex', 'Ações', 'Criptomoedas', 'Commodities (ouro, petróleo, etc.)']
		}
	],
	ui: {
		loaderText: 'A encontrar a melhor correspondência para si…',
		ctaBtn: 'Experimente',
		utpItems: ['1 minuto', '5 perguntas', 'Sem registo', 'Sem depósito'],
		disclaimer: 'O resultado é informativo e não constitui recomendação de investimento',
		quoteText: 'O melhor momento para investir foi ontem. O segundo melhor momento é agora. Quanto mais cedo começar a investir, melhor.',
		quoteAuthor: 'Warren Buffett',
		quoteRole: 'Empresário e investidor',
		questionLabel: 'Pergunta',
		questionOf: 'de',
		nextBtn: 'Próximo',
		matchScore: 'Pontuação de Correspondência',
		goToSite: 'Ir ao site',
		tryAgain: 'Tentar novamente',
		backToStart: 'Voltar ao início',
		title: ['Combinador de', 'Investimentos']
	}
};

export default pt;