'use client';

import mergeClassName from '@/lib/mergeClassName';
import type { ClassValue } from 'clsx';
import type { ChangeEvent, TextareaHTMLAttributes } from 'react';

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
	className?: ClassValue;
}

export default function Textarea(props: Props) {
	const { className, onInput, ...rest } = props;

	function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
		const textarea = event.target as HTMLTextAreaElement;
		textarea.style.height = 'auto';
		textarea.style.lineHeight = '1.5';
		textarea.style.height = `${textarea.scrollHeight + 5}px`;
		onInput?.(event);
	}

	return (
		<textarea
			{...rest}
			onInput={handleInput}
			className={mergeClassName(
				'my-2 w-full border-plWhite border-b bg-gray-200 bg-transparent font-autonomous text-plWhite leading-3 placeholder-plWhite placeholder-opacity-100 focus:placeholder-opacity-70 focus:outline-none',
				className,
			)}
		/>
	);
}
