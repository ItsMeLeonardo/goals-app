import type { NextPage } from 'next'

import ComingSoon from 'components/ComingSoon'
import { NextSeo } from 'next-seo'

//TODO: for markdown editor
//https://tiptap.dev/examples/default
//https://www.npmjs.com/package/rich-markdown-editor
const Landing: NextPage = () => {
	return (
		<>
			<NextSeo title="Juntos" description="Learn with projects developed with people like you" />
			<ComingSoon />
		</>
	)
}

export default Landing
