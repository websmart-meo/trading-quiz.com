import type { Lang } from '$lib/i18n';

export const prerender = true;

export function load({ params }: { params: { lang: string } }) {
	return { lang: params.lang as Lang };
}
