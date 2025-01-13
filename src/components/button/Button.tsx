import mergeClassName from '@/lib/mergeClassName';
import UnstyledButton, { type Props } from './UnstyledButton.tsx';

export default function Button(props: Props) {
	return (
		<UnstyledButton
			link={props.link}
			type={props.type}
			className={mergeClassName('w-60 content-center rounded-3xl bg-plWhite px-8 py-4 text-plBlue transition-transform hover:scale-95', props.className)}
			onClick={props.onClick}
		>
			{props.children}
		</UnstyledButton>
	);
}
