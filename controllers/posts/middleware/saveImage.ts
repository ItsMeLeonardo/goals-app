import type { NextApiResponse } from 'next'
import type { NextHandler } from 'next-connect'

import type { FileRequest } from 'controllers/posts/type'

import { uploadFromUrl, uploadImage } from 'lib/mediaFileCloud'

export default async function saveImage(req: FileRequest, res: NextApiResponse, next: NextHandler) {
	const { file, method, body } = req
	if (method !== 'POST') return next()

	const image = body.image as string
	if (!file) {
		if (!image) {
			return res.status(400).json({ message: 'No image' })
		}
		const imageSaved = await uploadFromUrl(image)
		if (!imageSaved) {
			return res.status(500).json({ message: 'Error saving image' })
		}
		req.image = imageSaved.secure_url

		return next()
	}

	const [media, error] = await uploadImage(file)
	if (error || !media) {
		return res.status(500).json({ message: error })
	}
	req.image = media.url
	next()
}
