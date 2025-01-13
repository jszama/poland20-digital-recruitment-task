export interface MenuItemLink {
	name: string;
	link: string;
}
export interface MenuItemWithOptions {
	name: string;
	options: MenuItemLink[];
}

export type MenuItemType = MenuItemLink | MenuItemWithOptions;

export type Menu = MenuItemType[];

export const menu: Menu = [
	{ name: 'Konferencja', link: '/summit' },
	// { name: 'Kup bilet', link: '/tickets' },
	// { name: 'Agenda', link: '/summit#agenda' },
	{
		name: 'Inne projekty',
		options: [
			{ name: 'Work 2.0', link: '/work' },
			{ name: 'Edu 2.0', link: '/edu' },
			{ name: '#NOMAD Podcast', link: '/podcast' },
		],
	},

	{ name: 'O nas', link: '/about' },
	{ name: 'Kontakt', link: '/contact' },
];

function getMobileMenu(menu: Menu): MobileMenuType {
	const mobileMenu: MobileMenuType = [];
	for (const item of menu) {
		if ('options' in item) {
			mobileMenu.push(...item.options);
			continue;
		}
		mobileMenu.push(item);
	}
	return mobileMenu;
}

export type MobileMenuType = MenuItemLink[];
export const mobileMenu = getMobileMenu(menu);
