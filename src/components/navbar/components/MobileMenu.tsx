import { useEffect } from 'react';

import { mobileMenu } from '@/components/navbar/assets/menu.ts';
import MenuLink from './MenuLink.tsx';

interface Props {
	setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu(props: Props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	});

	return (
		<nav className="fixed top-0 left-0 z-40 flex h-full w-full flex-col items-center justify-center gap-6 bg-plBlack/90 transition-all duration-1000">
			{mobileMenu.map((item) => (
				<MenuLink key={`MobileMenuLink_${item.name}`} href={item.link} onClick={() => props.setIsOpen(false)} className="text-xl">
					{item.name}
				</MenuLink>
			))}
		</nav>
	);
}
