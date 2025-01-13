import mergeClassName from '@/lib/mergeClassName';
import { type Props, sharedClassName, sharedH2ToH6ClassName } from './shared.ts';

export default function H3(props: Props) {
	return <h3 className={mergeClassName(sharedClassName, sharedH2ToH6ClassName, props.className)}>{props.children}</h3>;
}
