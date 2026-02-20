<script lang="ts">
	export let fallbackFormat = 'png';
	export let basePath = '';
	export let alt = '';
	export let classes = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';
	export let fetchpriority: 'auto' | 'high' | 'low' | null | undefined = 'auto';

	const screens = [
		{ name: 'desk', media: '(min-width: 1025px)' },
		{ name: 'tab', media: '(min-width: 480px) and (max-width: 1024px)' },
		{ name: 'mob', media: '(max-width: 479px)' }
	];

	const formats = ['avif', 'webp', fallbackFormat];
</script>

<picture class={classes}>
	{#each screens as screen}
		{#each formats as format}
			<source
				media={screen.media}
				type="image/{format}"
				srcset="{basePath}{screen.name}@1x.{format} 1x, {basePath}{screen.name}@2x.{format} 2x"
			/>
		{/each}
	{/each}

	<img
		src="{basePath}desk@1x.{fallbackFormat}"
		srcset="{basePath}desk@2x.{fallbackFormat} 2x"
		{alt}
		{loading}
		{fetchpriority}
		decoding="async"
	/>
</picture>
