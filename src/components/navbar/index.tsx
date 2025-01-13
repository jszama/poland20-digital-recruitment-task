'use client';
import { useCallback, useEffect, useState } from 'react';

import DesktopMenu from './components/DesktopMenu.tsx';
import MobileMenu from './components/MobileMenu.tsx';
import MobileMenuOpener from './components/MobileMenuOpener.tsx';
import PolandLogoLink from './components/PolandLogoLink.tsx';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = useCallback(() => {
		setIsScrolled(window.scrollY > 60);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="h-28" />
			<div
				className={`fixed top-0 left-0 z-50 flex w-full items-center justify-center px-12 py-4 transition-all md:justify-between lg:px-16 ${isScrolled ? 'h-20 bg-plBlack/90' : 'h-28'}`}
			>
				<PolandLogoLink setIsMobileMenuOpen={setMobileMenuOpen} />
				<DesktopMenu />

				<MobileMenuOpener isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
			</div>
			{mobileMenuOpen && <MobileMenu setIsOpen={setMobileMenuOpen} />}
		</>
	);
}
