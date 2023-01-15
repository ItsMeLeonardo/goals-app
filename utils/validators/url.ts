import { z } from 'zod'

const urlSchema = z.string().url()
export function urlValidator(url: string) {
	const result = urlSchema.safeParse(url)

	return result.success
}
