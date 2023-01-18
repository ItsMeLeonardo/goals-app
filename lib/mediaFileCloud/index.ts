import {
	v2 as cloudinary,
	UploadApiResponse,
	UploadApiErrorResponse,
	UploadApiOptions,
	UploadResponseCallback,
} from 'cloudinary'

import { downloadImage, optimizeImage } from 'lib/media/images'

export type mediaType = {
	url: string
	name: string
}

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

const IMAGE_OPTIONS: UploadApiOptions = { folder: process.env.CLOUDINARY_FOLDER }

async function uploadStream(
	buffer: Buffer,
	config: UploadApiOptions
): Promise<UploadApiResponse | UploadApiErrorResponse> {
	const optimizedImage = await optimizeImage(buffer)
	return new Promise((resolve, reject) => {
		const cloudinaryDone: UploadResponseCallback = (error, result) => {
			return !error && result ? resolve(result) : reject(error)
		}
		cloudinary.uploader.upload_stream(config, cloudinaryDone).end(optimizedImage)
	})
}

export async function uploadImage(
	file: Express.Multer.File
): Promise<[mediaType | null, string | null]> {
	try {
		const { public_id: name, secure_url: url } = await uploadStream(file.buffer, IMAGE_OPTIONS)

		return [{ url, name }, null]
	} catch (error) {
		// console.error({ error });
		return [null, 'Error cargando la imagen']
	}
}

export async function uploadFromUrl(url: string) {
	try {
		const buffer = await downloadImage(url)

		const result = await uploadStream(buffer, IMAGE_OPTIONS)

		return result
	} catch (error) {
		return null
	}
}
