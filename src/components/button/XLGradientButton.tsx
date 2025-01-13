import mergeClassName from '@/lib/mergeClassName';
import UnstyledButton, { type Props } from './UnstyledButton.tsx';

export default function XLGradientButton(props: Props) {
	return (
		<UnstyledButton
			link={props.link}
			type={props.type}
			onClick={props.onClick}
			className={mergeClassName(
				'w-64 content-center rounded-3xl bg-primary-gradient py-8 font-autonomous font-semibold text-3xl text-plWhite transition-transform duration-300 hover:scale-95 sm:w-80',
				props.className,
			)}
		>
			{props.children}
		</UnstyledButton>
	);
}
