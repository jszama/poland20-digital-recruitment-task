import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/fonts/', '/icons/', '/images/', '/logos/,', '/documents/', '/tickets/form/', '/tickets/survey/', '/tickets/buy/'],
		},
	};
}
