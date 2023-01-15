import { useState, ChangeEvent, useEffect } from 'react'
import CloseIcon from 'remixicon-react/CloseLineIcon'

import Form from './form.module.css'

type Props = {
	w?: number | string
	h?: number | string
	clear?: boolean
	thumbnail?: string
	onLoadImage?: (file: File) => void
	onRemoveImage?: () => void
}

export default function FormImageInput(props: Props) {
	const { w = '100%', h = '100%', onLoadImage, clear, thumbnail, onRemoveImage } = props

	const [fileUrl, setFileUrl] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		if (clear) {
			setFileUrl('')
			setError(false)
		}
	}, [clear])

	const loadFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (error) setError(false)

		const { files } = event.target

		if (files && files.length > 0) {
			const file = files[0]

			const url = URL.createObjectURL(file)

			setFileUrl(url)
			setTimeout(() => URL.revokeObjectURL(url), 1000)

			if (!onLoadImage) return
			onLoadImage(file)
		}
	}

	const onErrorLoad = () => {
		setFileUrl('')
		setError(true)
	}

	const onClear = () => {
		setFileUrl('')
		setError(false)

		if (onRemoveImage) onRemoveImage()
	}

	const infoMessage = error
		? 'Ocurrió un error al subir la imagen, vuelve a intentarlo'
		: 'Sube una imagen para el recurso'

	const thereIsPreview = fileUrl.length > 0 || thumbnail
	return (
		<label className={Form.fileInputLabel}>
			<input type="file" className={Form.fileInput} accept="image/*" onChange={loadFile} />
			<picture className={Form.image_container} style={{ width: w, height: h }}>
				{thereIsPreview && (
					<button className={Form.image_close} type="button" onClick={onClear}>
						<CloseIcon />
					</button>
				)}

				{thereIsPreview ? (
					<img src={thumbnail || fileUrl} alt="thumbnail" onError={onErrorLoad} />
				) : (
					<div className={Form.image_placeholder}>
						<span>{infoMessage}</span>
						<i className={`${Form.image_placeholder_icon} uil uil-image-plus`}></i>
					</div>
				)}
			</picture>
		</label>
	)
}
