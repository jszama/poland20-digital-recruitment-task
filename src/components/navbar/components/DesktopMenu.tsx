import { type MenuItemType, menu } from '@/components/navbar/assets/menu.ts';
import MenuLink from '@/components/navbar/components/MenuLink.tsx';

export default function DesktopMenu() {
	return (
		<nav className="hidden w-full items-center justify-around gap-4 text-plWhite text-xl md:flex lg:justify-end lg:gap-14 xl:gap-20">
			{menu.map((item) => (
				<DesktopMenuItem key={`DesktopMenuItem_${item.name}`} {...item} />
			))}
		</nav>
	);
}

function DesktopMenuItem(props: MenuItemType) {
	if ('link' in props) {
		return <MenuLink href={props.link}>{props.name}</MenuLink>;
	}

	return (
		<div className="group relative">
			<p className="py-8 transition-all duration-300 hover:scale-95 hover:text-gray-300">{props.name}</p>
			<div className="-top-48 -translate-y-10 absolute left-1/2 mt-12 flex w-max flex-col gap-4 rounded-lg bg-plBlack/90 px-8 py-4 group-hover:animate-desktopSubMenu">
				{props.options.map((subItem) => (
					<MenuLink key={`DesktopMenuItem_${props.name}_${subItem.name}`} href={subItem.link}>
						{subItem.name}
					</MenuLink>
				))}
			</div>
		</div>
	);
}
