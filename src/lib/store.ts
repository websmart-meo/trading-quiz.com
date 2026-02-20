import { writable, derived } from 'svelte/store';
import questions from '$lib/questions';

export const step = writable('main');
export const idx = writable(1);
export const question = derived(idx, ($idx) => questions[$idx - 1]);
