import NextLink from 'next/link'
import { SWRConfig } from 'swr'

import FeedList from 'components/Feed/FeedList'
// import Stories from "components/Story/Stories";
import { FEED_POST_LIST } from 'components/Feed/FeedList'

import type { GetServerSideProps } from 'next/types'
import type { Post } from 'models/post'

// services
import { getAll } from 'services/post'

export default function Home({ fallback }: { fallback: Post[] }) {
	return (
		<>
			<SWRConfig value={{ fallback }}>
				{/* <Stories /> */}

				<div className="create-post-form">
					<picture className="profile-photo">
						<img
							src="https://images.unsplash.com/photo-1651868722945-fab942eaaec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
						/>
					</picture>
					<input
						type="text"
						placeholder="¿Qué tienes en mente ${username}?"
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
