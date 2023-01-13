type Range = {
	from: number
	to: number
}

const defaultRange = {
	from: 0,
	to: 360,
}

export function generateSoftColor(softness = 90, range: Range = defaultRange) {
	const random = Math.round(Math.random() * 360)
	const h = random * (range.to - range.from) + range.from
	const softColor = `hsl(${h}, 100%, ${softness}%)`
	return softColor
}

export function getSoftColorWithContrast(
	softness = 90,
	range: Range = defaultRange,
	opacity = 0.2
) {
	const { from, to } = range
	//generate hsl color in range
	const hue = Math.floor(Math.random() * (to - from + 1)) + from

	const softColor = `hsl(${hue}, 100%, ${softness}%)`
	const bgColor = `hsla(${hue}, 100%, ${softness}%, ${opacity})`
	return [softColor, bgColor]
}
