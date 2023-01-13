import NextLink from 'next/link'
import { SWRConfig } from 'swr'

import FeedList from 'components/Feed/FeedList'
// import Stories from "components/Story/Stories";
import { FEED_POST_LIST } from 'components/Feed/FeedList'

import type { GetServerSideProps } from 'next/types'
import type { Post } from 'models/post'

// services
import { getAll } from 'services/post'
import { NextSeo } from 'next-seo'
import CreateFormPost from 'components/shared/CreateFormPost'
// import Stories from 'components/Story/Stories'

export default function Home({ fallback }: { fallback: Post[] }) {
	return (
		<>
			<NextSeo title="Juntos | Home" />
			<SWRConfig value={{ fallback }}>
				{/* <Stories /> */}

				<CreateFormPost />
				<FeedList />
			</SWRConfig>
		</>
	)
}

Home.requireAuth = true

export const getServerSideProps: GetServerSideProps = async () => {
	const posts = await getAll({ fullUrl: true })

	return {
		props: {
			fallback: {
				[FEED_POST_LIST]: posts,
			},
		},
	}
}
