import {
	v2 as cloudinary,
	UploadApiResponse,
	UploadApiErrorResponse,
	UploadApiOptions,
	UploadResponseCallback,
} from 'cloudinary'

export type mediaType = {
	url: string
	name: string
}

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

function uploadStream(
	buffer: Buffer,
	config: UploadApiOptions
): Promise<UploadApiResponse | UploadApiErrorResponse> {
	return new Promise((resolve, reject) => {
		const cloudinaryDone: UploadResponseCallback = (error, result) => {
			return !error && result ? resolve(result) : reject(error)
		}
		cloudinary.uploader.upload_stream(config, cloudinaryDone).end(buffer)
	})
}

export async function uploadImage(
	file: Express.Multer.File
): Promise<[mediaType | null, string | null]> {
	try {
		const imageOptions = { folder: process.env.CLOUDINARY_FOLDER }
		const { public_id: name, secure_url: url } = await uploadStream(file.buffer, imageOptions)

		return [{ url, name }, null]
	} catch (error) {
		// console.error({ error });
		return [null, 'Error cargando la imagen']
	}
}

export async function uploadFromUrl(url: string) {
	try {
		const result = await cloudinary.uploader.upload(url, {
			folder: process.env.CLOUDINARY_FOLDER,
		})
		return result
	} catch (error) {
		return null
	}
}
