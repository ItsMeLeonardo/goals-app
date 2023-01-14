import NextLink from 'next/link'
import type { ReactNode, ButtonHTMLAttributes } from 'react'
import type { ThemeColor } from 'utils/client/shared/colors/theme'
import Loader from '../Loader'
import button from './button.module.css'

export type Props = {
	type?: 'button' | 'submit' | 'reset'
	color?: ThemeColor
	loading?: boolean
	border?: boolean
	rounded?: boolean
	children: ReactNode
	icon?: ReactNode
	iconRight?: ReactNode
	href?: string
	to?: string
	fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: Props) {
	const {
		type = 'button',
		color = 'primary',
		loading,
		border,
		children,
		icon,
		iconRight,
		href,
		to,
		disabled,
		fullWidth,
		...buttonProps
	} = props

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				data-color={color}
				data-border={border}
				className={button.btn}
				data-disabled={disabled}
				data-full-width={fullWidth}
			>
				{icon && <span className={button.icon}>{icon}</span>}
				<span className={button.label}>{children}</span>
				{loading && <Loader color="light" size={24} />}
				{iconRight && <span className={button.iconRight}>{iconRight}</span>}
			</a>
		)
	}

	if (to) {
		return (
			<NextLink href={to}>
				<a
					data-color={color}
					data-border={border}
					className={button.btn}
					data-disabled={disabled}
					data-full-width={fullWidth}
				>
					{icon && <span className={button.icon}>{icon}</span>}
					<span className={button.label}>{children}</span>
					{loading && <Loader color="light" size={24} />}
					{iconRight && <span className={button.iconRight}>{iconRight}</span>}
				</a>
			</NextLink>
		)
	}

	return (
		<button
			type={type}
			data-color={color}
			data-border={border}
			className={button.btn}
			disabled={disabled}
			data-full-width={fullWidth}
			{...buttonProps}
		>
			{icon && <span className={button.icon}>{icon}</span>}
			<span className={button.label}>{children}</span>
			{loading && <Loader color="light" size={24} />}
			{iconRight && <span className={button.iconRight}>{iconRight}</span>}
		</button>
	)
}
