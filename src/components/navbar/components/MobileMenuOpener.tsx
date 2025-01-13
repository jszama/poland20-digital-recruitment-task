interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenuOpener(props: Props) {
	return (
		<div className="flex grow items-center justify-end md:hidden">
			<button onClick={() => props.setIsOpen(!props.isOpen)} type="button">
				{props.isOpen ? closeIcon() : openIcon()}
			</button>
		</div>
	);
}

function closeIcon() {
	return (
		<svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
}

function openIcon() {
	return (
		<svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
		</svg>
	);
}
