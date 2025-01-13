import ServerImage from '@/components/image/ServerImage.tsx';

import HeroSection, { type HeroSectionProps } from './HeroSection.tsx';
import { gridImage } from './assets.ts';

export default function GridHeroSection(props: HeroSectionProps) {
	return (
		<section className="flex w-full flex-col items-center">
			<ServerImage src={gridImage} alt="" className="hidden w-full rotate-180 object-cover md:block" />
			<HeroSection {...props} />
			<ServerImage src={gridImage} alt="" className="hidden w-full object-cover md:block" />
		</section>
	);
}
