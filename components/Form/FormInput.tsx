import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react'

import Form from './form.module.css'

type props = {
	icon?: ReactNode
	error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function FormInput({ icon, error, ...props }: props) {
	const [hasError, setHasError] = useState<string | null>(error || null)

	useEffect(() => {
		let timeOut: NodeJS.Timeout
		if (error) {
			timeOut = setTimeout(() => setHasError(null), 5000)
		}

		return () => clearTimeout(timeOut)
	}, [error])

	return (
		<label className={Form.field}>
			<span className={Form.field_icon}>{icon}</span>
			<input className={`${Form.input} ${hasError && Form.input_error}`} {...props} />
			{hasError && <span className={Form.error_message}>{error}</span>}
		</label>
	)
}
