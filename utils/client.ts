import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'bqp6y988',
	dataset: 'production',
	apiVersion: '2022-07-10',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
