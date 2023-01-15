import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import Tippy from '@tippyjs/react'
import ErrorIcon from 'remixicon-react/ErrorWarningLineIcon'
import QuestionIcon from 'remixicon-react/QuestionLineIcon'

import Form from './form.module.css'
import ErrorMessage from './ErrorMessage'
import Loader from 'components/shared/Loader'

type props = {
	icon?: ReactNode
	error?: string
	helperText?: string
	loading?: boolean
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function FormInput(props: props) {
	const { icon, error, helperText, loading, disabled, ...inputProps } = props

	return (
		<label
			className={Form.field}
			data-error={!!error && !loading}
			data-disabled={disabled || loading}
		>
			<span className={Form.field_icon}>{icon}</span>
			<input className={Form.input} disabled={disabled || loading} {...inputProps} />

			{error && !loading && (
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

			{helperText && !loading && (
				<Tippy
					className={Form.helper_tooltip}
					content={helperText}
					interactive
					placement="left"
					arrow={false}
					offset={[0, 0]}
				>
					<span className={Form.input_help_icons}>
						<QuestionIcon />
					</span>
				</Tippy>
			)}

			{loading && <Loader size={24} />}
		</label>
	)
}
