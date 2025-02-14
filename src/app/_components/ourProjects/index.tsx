import H3 from '@/components/heading/H3.tsx';

import Figure from '@/components/Figure.tsx';
import Link from '@/components/Link.tsx';
import { edu, nomadPodcast, work20 } from './assets.ts';

export default function OurProjects() {
	return (
		<section className="our-projects">
			<header className="our-projects-header">
				<H3>Nasze projekty</H3>
				<p>Robimy o wiele więcej niż sama konferencja - dowiedź się więcej o naszych inicjatywach</p>
			</header>
			<section className="our-projects-tiles">
				<Link href={'/podcast'}>
					<Figure imageSrc={nomadPodcast} imageAlt="Nomad Podcast" caption="Nomad Podcast" />
				</Link>
				<Link href={'/work'}>
					<Figure imageSrc={work20} imageAlt="Work Poland 2.0" caption="Work 2.0" />
				</Link>
				<Link href={'/edu'}>
					<Figure imageSrc={edu} imageAlt="Education Poland 2.0" caption="Edu 2.0" />
				</Link>
			</section>
		</section>
	);
}
