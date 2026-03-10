import type { Translations } from './types';

const es: Translations = {
	questions: [
		{ q: 'Tu edad', a: ['18-25', '26-35', '36-45', '45+'] },
		{
			q: 'Tu experiencia en trading',
			a: [
				'Soy principiante',
				'Soy trader profesional',
				'Sé cómo operar, pero necesito practicar en una cuenta demo'
			]
		},
		{ q: '¿Cuál es tu presupuesto para trading?', a: ['$10', '$100', '$500', '$1000+'] },
		{
			q: '¿Qué es lo más importante para ti?',
			a: [
				'Estabilidad',
				'Equilibrio riesgo/beneficio',
				'Máximo beneficio',
				'Crecimiento del capital'
			]
		},
		{
			q: '¿Qué activos operas con más frecuencia?',
			a: ['Forex', 'Acciones', 'Criptomonedas', 'Materias primas (oro, petróleo, etc.)']
		}
	],
	ui: {
		loaderText: 'Buscando tu mejor opción…',
		ctaBtn: 'Pruébalo',
		utpItems: ['1 minuto', '5 preguntas', 'Sin registro', 'Sin depósito'],
		disclaimer: 'El resultado es informativo y no es una recomendación de inversión',
		quoteText: 'El mejor momento para invertir fue ayer. El segundo mejor momento es ahora. Cuanto antes empieces a invertir, mejor.',
		quoteAuthor: 'Warren Buffett',
		quoteRole: 'Empresario e inversor',
		questionLabel: 'Pregunta',
		questionOf: 'de',
		nextBtn: 'Siguiente',
		matchScore: 'Puntuación de Compatibilidad',
		goToSite: 'Ir al sitio',
		tryAgain: 'Intentar de nuevo',
		backToStart: 'Volver al inicio',
		title: ['Combinador de', 'Inversiones']
	}
};

export default es;