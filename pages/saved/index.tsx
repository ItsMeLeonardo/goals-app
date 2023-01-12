import { NextSeo } from 'next-seo'
export default function Saved() {
	return (
		<>
			<NextSeo title="My list" />
			<div>
				<h1>Hello world</h1>
			</div>
		</>
	)
}

Saved.requireAuth = true
