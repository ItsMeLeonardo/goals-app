import axios from 'axios'
import sharp from 'sharp'

export async function downloadImage(url: string) {
	const response = await axios({
		url,
		responseType: 'arraybuffer',
	})

	const buffer = Buffer.from(response.data, 'binary')
	return buffer
}

export async function optimizeImage(buffer: Buffer) {
	const optimizedImage = await sharp(buffer).webp({ quality: 75 }).toBuffer()
	return optimizedImage
}
