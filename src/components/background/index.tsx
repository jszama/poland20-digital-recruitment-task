'use client';

import ClientImage from '@/components/image/ClientImage.tsx';
import { backgroundImageSvg } from './assets.ts';

export default function Background() {
	return <ClientImage src={backgroundImageSvg} alt="" fill={true} className="-z-50 absolute top-0 left-0 hidden w-full object-cover object-left-top md:block" />;
}
