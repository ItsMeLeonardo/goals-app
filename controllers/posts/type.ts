import type { NextApiRequest } from 'next'

export type FileRequest = NextApiRequest & {
	file?: Express.Multer.File
	image?: string
}
