import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export const GET = async (context: APIContext) => {
	const posts = await getCollection('posts');

	return rss({
		stylesheet: '/rss/styles.xsl',
		title: "Sarah's Yukino | Blog",
		description: 'A blog about everything I know!',
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			author: post.data.author,
			link: `/${post.slug}/`
		})),
		customData: `<language>en-us</language>`
	});
};
