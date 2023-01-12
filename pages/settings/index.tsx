import ComingSoon from 'components/ComingSoon'
import { NextSeo } from 'next-seo'

export default function Settings() {
	return (
		<>
			<NextSeo title="Settings" />
			<ComingSoon />
		</>
	)
}

Settings.requireAuth = true
