import type { ReactNode } from 'react';

interface MainLayoutProps {
	heroSection?: ReactNode;
	children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
	return (
		<main className="flex w-full flex-col items-center gap-32">
			{props.heroSection ?? ''}
			<div className="flex w-full max-w-[1440px] flex-col items-center gap-32 px-5">{props.children}</div>
		</main>
	);
}
