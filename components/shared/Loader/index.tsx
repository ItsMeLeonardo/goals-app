import type { HTMLAttributes } from 'react'
import type { ThemeColor } from 'utils/client/shared/colors/theme'
import { buildCustomProperties } from 'utils/client/shared/styles/customProperties'

import loader from './loader.module.css'

export type Props = {
	size?: number
	color?: ThemeColor
} & HTMLAttributes<HTMLDivElement>

export default function Loader(props: Props) {
	const { size = 32, color = 'primary', ...divProps } = props

	const style = buildCustomProperties({ 'loader-size': `${size}px` })

	return <div className={loader.loader} style={style} data-color={color} {...divProps} />
}
