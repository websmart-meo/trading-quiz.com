import type { SubpageType } from '$lib/types';

export const prerender = true;

export async function load({ params }) {
	const subpage = params.subpage as SubpageType;

	return { subpage };
}
