import type { ClassValue } from 'clsx';
import type { ReactNode } from 'react';

export interface Props {
	children: ReactNode;
	className?: ClassValue;
}

export const sharedClassName: ClassValue = 'text-wrap font-autonomous';
export const sharedH2ToH6ClassName: ClassValue = 'text-3xl sm:text-4xl';
