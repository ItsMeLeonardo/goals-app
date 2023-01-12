import ExploreBody from 'components/Explore'
import { NextSeo } from 'next-seo'

export default function Explore() {
	return (
		<>
			<NextSeo title="Find projects" />
			<ExploreBody />
		</>
	)
}

Explore.requireAuth = true
