import Avvvatars from 'avvvatars-react'
import Image from 'next/image'

import { ReactNode, DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import style from './avatar.module.css'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Props = {
	src?: string
	alt: string
	size?: Sizes
	icon?: ReactNode
	bordered?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const sizes: Record<Sizes, number> = {
	xs: 24,
	sm: 32,
	md: 48,
	lg: 64,
	xl: 80,
}

export default function Avatar(props: Props) {
	const { src, alt, size = 'sm', icon, bordered, ...pictureProps } = props

	const [error, setError] = useState(false)
	const handleError = () => setError(true)

	const hasIconAndImg = icon && src
	const justIcon = icon && !src
	const justImg = src && !icon

	const sizeValue = sizes[size]

	if (!icon && !src && !alt) throw new Error('Avatar must have an icon, image or alt')

	return (
		<picture className={style.avatar} data-size={size} data-bordered={bordered} {...pictureProps}>
			{justIcon && <span className={style.icon}>{icon}</span>}
			{justImg && !error ? (
				<Image width={sizeValue} height={sizeValue} src={src} alt={alt} onError={handleError} />
			) : (
				<Avvvatars value={alt} size={sizeValue} />
			)}
			{hasIconAndImg && (
				<div className={style.bothContainer}>
					<Image width={sizeValue} height={sizeValue} src={src} alt={alt} />
					<span className={style.icon} data-has-both>
						{icon}
					</span>
				</div>
			)}
		</picture>
	)
}
