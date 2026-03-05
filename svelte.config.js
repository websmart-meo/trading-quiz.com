import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// base: process.env.NODE_ENV === 'production' ? '/trading-quiz.com' : ''
		},
		prerender: {
			entries: [
				'/', '/ai', '/light', '/v1', '/v2', '/v3',
				'/en/ai', '/pt/ai', '/es/ai', '/th/ai',
				'/en/light', '/pt/light', '/es/light', '/th/light',
				'/en/v1', '/pt/v1', '/es/v1', '/th/v1',
				'/en/v2', '/pt/v2', '/es/v2', '/th/v2',
				'/en/v3', '/pt/v3', '/es/v3', '/th/v3'
			]
		}
	}
};

export default config;
