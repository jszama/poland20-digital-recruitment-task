import type { ImageProps as ImagePropsNext } from 'next/dist/shared/lib/get-img-props';
import ImageNext from 'next/image';

import { type ImageSource, normalizeImageSource } from './index.ts';

export type ClientImageProps = {
	src: ImageSource;
} & Omit<ImagePropsNext, 'src'>;

export default function ClientImage(props: ClientImageProps) {
	if (typeof props.src === 'string') {
		throw new Error(
			`ClientImage: For remote images use the ServerImage component. To avoid running ServerImage on the client pass it as a prop to the client-side component. Got: ${props.src}`,
		);
	}

	const imageSource = normalizeImageSource(props.src);

	const nextImageProps: ImagePropsNext = {
		...props,
		src: imageSource,
	};

	if (typeof imageSource !== 'string') {
		if (imageSource.blurDataURL !== undefined) {
			nextImageProps.placeholder = 'blur';
		}
	}

	return <ImageNext {...nextImageProps} />;
}
