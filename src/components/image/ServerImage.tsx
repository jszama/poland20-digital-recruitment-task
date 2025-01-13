import 'server-only';

import type { ImageProps as ImagePropsNext } from 'next/dist/shared/lib/get-img-props';
import ImageNext from 'next/image';

import { imageSize } from './imageSize.ts';
import { type ImageSource, normalizeImageSource } from './index.ts';

export type ImageProps = {
	src: ImageSource;
} & Omit<ImagePropsNext, 'src'>;

export default async function ServerImage(props: ImageProps) {
	const imageSource = normalizeImageSource(props.src);

	const nextImageProps: ImagePropsNext = {
		...props,
		src: imageSource,
	};

	if (typeof imageSource === 'string') {
		if (!isValidURL(imageSource)) {
			throw new Error(`ServerImage: The 'src' prop should be either a remote image URL or a statically imported image. Got: ${nextImageProps.src}`);
		}

		const [size, err] = await imageSize(imageSource);
		if (err !== null) {
			// TODO: fix error handling
			throw err;
		}

		nextImageProps.width = size.width;
		nextImageProps.height = size.height;
	} else {
		// biome-ignore lint/style/useCollapsedElseIf: This if is not related to the else clause. The else clause is a type check, Whereas this if is a blur check.
		if (imageSource.blurDataURL !== undefined) {
			nextImageProps.placeholder = 'blur';
		}
	}

	return <ImageNext {...nextImageProps} />;
}

function isValidURL(x: string): boolean {
	if (typeof x !== 'string') {
		return false;
	}

	try {
		new URL(x);
		return true;
	} catch {
		return false;
	}
}
