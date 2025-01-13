import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import Background from '@/components/background/index.tsx';
import Footer from '@/components/footer/index.tsx';
import Navbar from '@/components/navbar/index.tsx';

import './globals.css';

export const metadata: Metadata = {
	title: 'Poland 2.0',
	description: '',
};

const autonomous = localFont({
	src: './../assets/font/Autonomous.woff2',
	variable: '--font-autonomous',
	weight: '300, 400, 600, 700',
	display: 'block',
	fallback: ['sans-serif'],
});

const lato = Lato({
	subsets: ['latin-ext'],
	weight: ['400', '700'],
	display: 'swap',
	fallback: ['sans-serif'],
	variable: '--font-lato',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pl" className={`${autonomous.variable} ${lato.variable} bg-plBlack font-lato text-plWhite`}>
			<body className="relative flex min-h-dvh flex-col items-center justify-between p-0">
				<Navbar />
				{children}
				<Footer />

				<Background />
			</body>
		</html>
	);
}
