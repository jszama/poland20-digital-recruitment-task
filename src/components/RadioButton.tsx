import type { ChangeEvent, ReactNode } from 'react';
interface RadioButtonProps {
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	children: ReactNode;
}

export default function RadioButton(props: RadioButtonProps) {
	return (
		<label className="flex cursor-pointer select-none items-center gap-1">
			<input type="radio" checked={props.checked} onChange={props.onChange} className="sr-only" />
			<div className="flex size-5 items-center justify-center rounded-full border">
				<span className={`size-8/12 rounded-full ${props.checked ? 'bg-plWhite' : 'bg-transparent'}`}> </span>
			</div>
			<div className="max-w-[calc(100%-1.5rem)] text-wrap">{props.children}</div>
		</label>
	);
}
