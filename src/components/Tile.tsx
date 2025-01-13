import ServerImage from './image/ServerImage.tsx';
import type { ImageSource } from './image/index.ts';

interface Props {
	icon: ImageSource;
	iconAlt: string;

	title: string;
	description: string;
}

export default function Tile({ icon, iconAlt, title, description }: Props) {
	return (
		<div className="max-w-[459px] rounded-3xl bg-primary-gradient px-6 py-9 text-plWhite">
			<ServerImage src={icon} alt={iconAlt} />
			<p className="mt-5 font-autonomous text-xl">{title}</p>
			<p className="mt-4">{description}</p>
		</div>
	);
}
