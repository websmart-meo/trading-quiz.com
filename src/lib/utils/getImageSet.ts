type FormatType = 'png' | 'jpg';

const images = import.meta.glob('/src/lib/assets/images/**/*.{png,jpg,webp,avif}', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

export function getImageSet(path: string, fallbackFormat: FormatType = 'png') {
	const base = `/src/lib/assets/images/${path}`;
    console.log('base', base);
    

	return {
		[fallbackFormat]: {
			'@1x': images[`${base}@1x.${fallbackFormat}`],
			'@2x': images[`${base}@2x.${fallbackFormat}`]
		},
		webp: {
			'@1x': images[`${base}@1x.webp`],
			'@2x': images[`${base}@2x.webp`]
		},
		avif: {
			'@1x': images[`${base}@1x.avif`],
			'@2x': images[`${base}@2x.avif`]
		}
	};
}

export function getResponsiveImageSet(
	imagesPath: string,
	screen: string,
	fallbackFormat: 'png' | 'jpg' = 'png'
) {
	return getImageSet(`${imagesPath}-${screen}`, fallbackFormat);
}
