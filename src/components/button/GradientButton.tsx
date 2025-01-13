import mergeClassName from '@/lib/mergeClassName';
import UnstyledButton, { type Props } from './UnstyledButton.tsx';

export default function GradientButton(props: Props) {
	return (
		<UnstyledButton
			link={props.link}
			type={props.type}
			className={mergeClassName('w-60 content-center rounded-3xl bg-primary-gradient px-8 py-4 text-plWhite transition-transform hover:scale-95', props.className)}
			onClick={props.onClick}
		>
			{props.children}
		</UnstyledButton>
	);
}
