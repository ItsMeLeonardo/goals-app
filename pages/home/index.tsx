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
import { useUser } from 'hooks/useUser'
import Avatar from 'components/Avatar'

export default function Home({ fallback }: { fallback: Post[] }) {
	const { user } = useUser()

	if (!user) return null

	return (
		<>
			<NextSeo title="Juntos | Home" />
			<SWRConfig value={{ fallback }}>
				{/* <Stories /> */}

				<div className="create-post-form">
					<picture className="profile-photo">
						<Avatar src={user.user?.image || ''} alt={user.user?.name || ''} />
					</picture>
					<input
						type="text"
						placeholder={`¿Qué tienes en mente?`}
						id="create-post"
						className="create-post-input"
						autoComplete="off"
					/>
					<NextLink href="/share">
						<a className="btn primary">Crear</a>
					</NextLink>
				</div>
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
