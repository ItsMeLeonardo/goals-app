import { CSSProperties } from 'react'

type Params = Record<string, string | number>

export function buildCustomProperties(properties: Params) {
	const customProperties = Object.entries(properties).reduce((acc, [key, value]) => {
		acc[`--${key}`] = value
		return acc
	}, {} as Params)

	return customProperties as CSSProperties
}
