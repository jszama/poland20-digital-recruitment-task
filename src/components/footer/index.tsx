import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { ImageSource } from '@/components/image/index.ts';
import type { ClassValue } from 'clsx';

import { poland20Logo } from '@/assets/index.ts';
import { facebookLogoImage, instagramLogoImage, linkedinLogoImage, tiktokLogoImage } from './assets.ts';

import mergeClassName from '@/lib/mergeClassName';

import Link from '@/components/Link';
import Image from '@/components/image/ServerImage.tsx';

export default function Footer() {
	return (
		<footer className="mt-12 flex w-full flex-col items-center rounded-t-3xl border-none bg-cover bg-white bg-opacity-15 pt-12 md:mt-48">
			<div className="grid xs:grid-cols-1 justify-between gap-8 gap-y-4 px-4 pb-8 sm:grid-cols-2 md:grid-cols-4">
				<FooterSection className="mr-16 mb-6 xs:items-start items-center md:items-end">
					<FooterLogoLink href="/" src={poland20Logo} alt="Poland 2.0" rel="" target="_self" width={100} />
				</FooterSection>

				<FooterSection>
					<FooterHeading>Nasze projekty</FooterHeading>
					<ul className="text-justify">
						<li>
							<FooterLink href="/summit">Summit</FooterLink>
						</li>
						<li>
							<FooterLink href="/podcast">#Nomad Podcast</FooterLink>
						</li>
						<li>
							<FooterLink href="/work">Work 2.0</FooterLink>
						</li>
						<li>
							<FooterLink href="/edu">Edu 2.0</FooterLink>
						</li>
					</ul>
				</FooterSection>

				<FooterSection>
					<FooterHeading>Poland 2.0</FooterHeading>
					<ul>
						<li>
							<FooterLink href="/about">O Nas</FooterLink>
						</li>
						<li>
							<FooterLink href="/contact">Kontakt</FooterLink>
						</li>
						<li>
							<FooterLink href="/documents/politykaPrywatnosci.pdf" prefetch={false}>
								Polityka Prywatności
							</FooterLink>
						</li>
						<li>
							<FooterLink href="/documents/regulamin.pdf" prefetch={false}>
								Regulamin
							</FooterLink>
						</li>
					</ul>
				</FooterSection>

				<FooterSection>
					<FooterHeading>Napisz</FooterHeading>
					<ul className="text-justify">
						<li>
							<FooterLink href="mailto:contact@poland20.com" className="normal-case" prefetch={false}>
								contact@poland20.com
							</FooterLink>
						</li>
						<li>ul. Stefana Batorego 18/108,</li>
						<li>02-591 Warszawa, Polska</li>
					</ul>
					<div className="ml-[-0.3rem] flex">
						<FooterLogoLink href="https://www.instagram.com/poland20summit/" src={instagramLogoImage} alt="Instagram" height={50} />
						<FooterLogoLink href="https://www.tiktok.com/@poland20summit" src={tiktokLogoImage} alt="TikTok" height={50} />
						<FooterLogoLink href="https://www.facebook.com/Poland20Foundation/" src={facebookLogoImage} alt="Facebook" height={50} />
						<FooterLogoLink href="https://www.linkedin.com/company/poland20/" src={linkedinLogoImage} alt="LinkedIn" height={50} />
					</div>
				</FooterSection>
			</div>

			<p className="px-4 pt-10 pb-5 text-justify md:text-center">© Fundacja Poland 2.0 2024, wszelkie prawa zastrzeżone</p>
		</footer>
	);
}

interface FooterSectionProps {
	children: ReactNode;
	className?: ClassValue;
}
function FooterSection(props: FooterSectionProps) {
	return <div className={mergeClassName('flex flex-col gap-2', props.className)}>{props.children}</div>;
}

interface FooterHeadingProps {
	children: ReactNode;
}
function FooterHeading(props: FooterHeadingProps) {
	return <p className="mt-4 font-autonomous text-md md:mt-0 md:pb-4">{props.children}</p>;
}

interface FooterLinkProps {
	href: string;
	children: ReactNode;
	target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
	rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
	className?: ClassValue;
	prefetch?: boolean;
}
function FooterLink(props: FooterLinkProps) {
	return (
		<Link
			href={props.href}
			className={mergeClassName('text-sm uppercase transition-all duration-300 hover:text-zinc-400 md:leading-9', props.className)}
			target={props.target ?? '_blank'}
			rel={props.rel ?? 'noopener noreferrer'}
			prefetch={props.prefetch}
		>
			{props.children}
		</Link>
	);
}

interface FooterLogoLinkProps extends Omit<FooterLinkProps, 'children'> {
	src: ImageSource;
	alt: string;
	width?: number;
	height?: number;
}

function FooterLogoLink(props: FooterLogoLinkProps) {
	return (
		<Link href={props.href} className="transition-transform duration-300 hover:scale-95" target={props.target} rel={props.rel} prefetch={props.prefetch}>
			<Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
		</Link>
	);
}
