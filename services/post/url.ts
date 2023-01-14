import { api } from 'services/api'

type urlResponse = {
	title: string
	description: string
	image: string
	url: string
}

export async function getUrlMetadata(url: string) {
	const response = await api.post<urlResponse>('/posts/url', { url })

	if (response.status !== 200) {
		throw new Error(response.statusText)
	}

	return response.data
}
