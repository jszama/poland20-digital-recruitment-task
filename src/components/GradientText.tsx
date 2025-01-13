import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function GradientText(props: Props) {
	return <span className="bg-primary-gradient bg-clip-text text-transparent">{props.children}</span>;
}
