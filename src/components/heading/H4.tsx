import mergeClassName from '@/lib/mergeClassName';
import { type Props, sharedClassName, sharedH2ToH6ClassName } from './shared.ts';

export default function H4(props: Props) {
	return <h4 className={mergeClassName(sharedClassName, sharedH2ToH6ClassName, props.className)}>{props.children}</h4>;
}
