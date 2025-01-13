import Link from '@/components/Link';
import type { ReactNode } from 'react';
import type { MouseEventHandler } from 'react';

export interface Props {
	children: ReactNode;
	link?: string;
	type?: 'button' | 'submit';
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function UnstyledButton(props: Props) {
	const button = (
		<button type={props.type ?? 'button'} className={props.className} onClick={props.onClick}>
			{props.children}
		</button>
	);
	return props.link ? <Link href={props.link}>{button}</Link> : button;
}
