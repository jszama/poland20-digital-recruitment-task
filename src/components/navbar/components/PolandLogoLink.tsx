import { poland20Logo } from '@/assets/index.ts';

import ClientImage from '@/components/image/ClientImage.tsx';
import MenuLink from './MenuLink.tsx';

interface Props {
	setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function PolandLogoLink(props: Props) {
	return (
		<div className="flex h-full grow justify-end md:grow-0">
			<MenuLink href="/" className="relative ml-4 aspect-square h-full" onClick={() => props.setIsMobileMenuOpen(false)}>
				<ClientImage src={poland20Logo} alt="Poland 2.0" fill={true} />
			</MenuLink>
		</div>
	);
}
