import mergeClassName from '@/lib/mergeClassName.ts';

import Link from '@/components/Link';

const MenuLink: typeof Link = (({ className, children, ...props }) => {
	return (
		<Link className={mergeClassName('transition-all duration-300 hover:scale-95 hover:text-gray-300', className)} {...props}>
			{children}
		</Link>
	);
}) as typeof Link;

export default MenuLink;
