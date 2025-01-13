import type { ReactNode } from 'react';

import H1 from '@/components/heading/H1';
import ServerImage from '@/components/image/ServerImage.tsx';
import type { ImageSource } from '@/components/image/index.ts';
import mergeClassName from '@/lib/mergeClassName';

export interface HeroSectionProps {
	children: ReactNode;
	description: ReactNode;

	imageSrc: ImageSource;
	imageAlt: string;

	imageClassName?: string;
	h1ClassName?: string;
}

export default function HeroSection(props: HeroSectionProps) {
	return (
		<section className="flex w-full max-w-[1440px] items-center px-8 md:my-10 md:gap-12 lg:gap-32">
			<div className="flex flex-col gap-4 md:w-3/5">
				<H1 className={props.h1ClassName}>{props.children}</H1>
				<div className="text-justify">{props.description}</div>
			</div>
			<ServerImage src={props.imageSrc} alt={props.imageAlt} loading="eager" className={mergeClassName('hidden w-2/5 object-contain md:block', props.imageClassName)} />
		</section>
	);
}
