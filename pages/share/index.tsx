import FormShare from 'components/Pages/Share'
import { NextSeo } from 'next-seo'

export default function Share() {
	return (
		<>
			<NextSeo title="Create Post" />
			<FormShare />
		</>
	)
}

Share.requireAuth = true
