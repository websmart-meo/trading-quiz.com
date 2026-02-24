import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/trading-quiz.com' : ''
		},
		prerender: {
			entries: ['/v1', '/v2', '/v3', '/']
		}
	}
};

export default config;
