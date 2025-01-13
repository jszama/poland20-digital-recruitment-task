import Image from './image/ServerImage.tsx';
import type { ImageSource } from './image/index.ts';

interface PartnerLogoProps {
	src: ImageSource;
	removePaddingY?: boolean;
}
export default function PartnerLogo(props: PartnerLogoProps) {
	return (
		<div className="h-24 w-40 rounded-lg bg-[#fff] bg-primary-gradient p-1">
			<div className="relative flex size-full items-center justify-center rounded-lg bg-[#fff] p-2">
				<Image src={props.src} alt="Partner Logo" className="max-h-full max-w-full rounded-sm object-contain" />
			</div>
		</div>
	);
}
