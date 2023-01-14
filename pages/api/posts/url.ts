import nc from 'next-connect'
import urlMetadata from 'url-metadata'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nc<NextApiRequest, NextApiResponse>({
	onError: (err, req, res) => {
		res.status(500).end('Something broke!')
	},
	onNoMatch: (req, res) => {
		res.status(404).end('Page is not found')
	},
}).post(async (req, res) => {
	const { url } = req.body

	if (!url) {
		return res.status(400).json({ message: 'No url' })
	}

	try {
		const { title, description, image } = await urlMetadata(url)
		res.status(200).json({ title, description, image, url })
	} catch (error) {
		res.status(500).json({ error: 'error getting metadata' })
	}
})

export default handler
