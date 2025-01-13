import NextLink from 'next/link';

const Link: typeof NextLink = (({ prefetch, children, ...props }) => {
	return (
		<NextLink prefetch={prefetch ?? true} {...props}>
			{children}
		</NextLink>
	);
}) as typeof NextLink;

export default Link;
