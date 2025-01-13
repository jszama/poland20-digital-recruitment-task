import mergeClassName from '@/lib/mergeClassName';
import { type Props, sharedClassName, sharedH2ToH6ClassName } from './shared.ts';

export default function H5(props: Props) {
	return <h5 className={mergeClassName(sharedClassName, sharedH2ToH6ClassName, props.className)}>{props.children}</h5>;
}
