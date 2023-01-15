import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import Tippy from '@tippyjs/react'
import ErrorIcon from 'remixicon-react/ErrorWarningLineIcon'
import QuestionIcon from 'remixicon-react/QuestionLineIcon'

import Form from './form.module.css'
import ErrorMessage from './ErrorMessage'

type props = {
	icon?: ReactNode
	error?: string
	helperText?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function FormInput(props: props) {
	const { icon, error, helperText, ...inputProps } = props

	return (
		<label className={Form.field} data-error={!!error}>
			<span className={Form.field_icon}>{icon}</span>
			<input className={Form.input} {...inputProps} />
			{error && (
				<Tippy
					className={Form.error_tooltip}
					content={<ErrorMessage message={error} />}
					interactive
					placement="left"
					arrow={false}
					offset={[0, 0]}
				>
					<span className={Form.input_help_icons} data-error>
						<ErrorIcon />
					</span>
				</Tippy>
			)}

			{!error && helperText && (
				<Tippy
					className={Form.helper_tooltip}
					content={helperText}
					interactive
					placement="left"
					arrow={false}
					offset={[0, 0]}
				>
					<span className={Form.input_help_icons}>
						<ErrorIcon />
					</span>
				</Tippy>
			)}
		</label>
	)
}
