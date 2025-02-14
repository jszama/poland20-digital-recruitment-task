import PartnerLogo from '@/components/PartnerLogo';
import H4 from '@/components/heading/H4.tsx';
import { currentPartners } from './assets/current.ts';
import { honoraryPatrons } from './assets/honorary.ts';
import { institutionalPartners } from './assets/institutional.ts';
import { mediaPatrons } from './assets/media.ts';
import { previousPartners } from './assets/previous.ts';
import { strategicPartners } from './assets/strategic.ts';

export default function Partners() {
	return (
		<section className="partners">
			<header>
				<H4>Partnerzy Poland 2.0 Summit</H4>
			</header>
			<section className="partners-logos-container">
				<section className="partners-container">
					<p className="w-12">Partnerzy strategiczni</p>
					<article className="partners-logos">
						{strategicPartners.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
				<section className="partners-container">
					<p className="w-12">Patronat honorowy</p>
					<article className="partners-logos">
						{honoraryPatrons.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
				<section className="partners-container">
					<p>Partnerzy</p>
					<article className="partners-logos">
						{currentPartners.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
				<section className="partners-container">
					<p>Partnerzy instytucjonalni</p>
					<article className="partners-logos">
						{institutionalPartners.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
				<section className="partners-container">
					<p>Patronaty Medialne</p>
					<article className="partners-logos">
						{mediaPatrons.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
				<section className="partners-container">
					<p>Poprzedni partnerzy</p>
					<article className="partners-logos">
						{previousPartners.map((partner) => (
							<PartnerLogo key={partner} src={partner} />
						))}
					</article>
				</section>
			</section>
		</section>
	);
}
