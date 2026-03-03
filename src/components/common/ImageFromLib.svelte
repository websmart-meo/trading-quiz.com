<script lang="ts">
	import { getImageSet } from '$lib/utils/getImageSet';

	type DensitySet = {
		'@1x'?: string;
		'@2x'?: string;
	};

	type ImageSet = {
		png?: DensitySet;
		jpg?: DensitySet;
		jpeg?: DensitySet;
		webp?: DensitySet;
		avif?: DensitySet;
	};

	export let fallbackFormat: 'png' | 'jpg' = 'png';
	export let imagesPath: string = '';
	export let alt = '';
	export let classes = '';
	export let loading: 'lazy' | 'eager' = 'lazy';

	const images: ImageSet = getImageSet(imagesPath, fallbackFormat);

	function srcset(set?: DensitySet) {
		if (!set) return '';
		const parts: string[] = [];
		if (set['@1x']) parts.push(`${set['@1x']} 1x`);
		if (set['@2x']) parts.push(`${set['@2x']} 2x`);
		return parts.join(', ');
	}

	$: fallback = images?.png || images?.jpg || images?.jpeg;
</script>

<picture class={classes}>
	{#if images?.avif}
		<source type="image/avif" srcset={srcset(images.avif)} />
	{/if}

	{#if images?.webp}
		<source type="image/webp" srcset={srcset(images.webp)} />
	{/if}

	{#if fallback}
		<img src={fallback['@1x']} srcset={srcset(fallback)} {alt} {loading} />
	{/if}
</picture>
