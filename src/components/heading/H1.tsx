import mergeClassName from '@/lib/mergeClassName';
import { type Props, sharedClassName } from './shared.ts';

export default function H1(props: Props) {
	return <h1 className={mergeClassName(sharedClassName, 'font-bold text-4xl uppercase sm:text-5xl', props.className)}>{props.children}</h1>;
}
