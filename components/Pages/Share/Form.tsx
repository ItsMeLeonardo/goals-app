import { ChangeEvent, useState } from 'react'
import { debounce } from 'throttle-debounce'
import type { FormEvent } from 'react'

import { urlValidator } from 'utils/validators'
import { useShare } from 'components/Pages/Share/hooks/useShare'
import { useUser } from 'hooks/useUser'

import AutocompleteTag from 'components/Pages/Share/AutocompleteTag'
import FormGroup from 'components/Form/FormGroup'
import FormInput from 'components/Form/FormInput'
import FormImageInput from 'components/Form/FormImageInput'
import PostComponent from 'components/Post'

import LinkIcon from 'remixicon-react/LinkIcon'
import TitleIcon from 'remixicon-react/HeadingIcon'

//services
import { create } from 'services/post'

// styles
import style from './formShare.module.css'

//types
import type { PostDto } from 'controllers/posts/dto'
import type { Post } from 'models/post'
import type { Tag } from 'models/tag'
import { getUrlMetadata } from 'services/post/url'

type FormStatus = 'default' | 'loading' | 'error' | 'success'

export default function FormShare() {
	const { formState, setImage, setTitle, setUrl, reset, removeImage } = useShare()
	const { user } = useUser()

	const [thumbnail, setThumbnail] = useState<string | undefined>()
	const [formStatus, setFormStatus] = useState<FormStatus>('default')
	const [postSaved, setPostSaved] = useState<Post | null>(null)

	const { title, url } = formState

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!user) return
		const id = user.userId as string

		const tags = formState.tags as Tag[]

		const postBody: PostDto = {
			title,
			url,
			tags: tags.map((tag) => tag.id.toString()),
			user: id,
		}

		if (!formState.image) return

		setFormStatus('loading')

		create(postBody, formState.image).then((data) => {
			reset()
			setFormStatus('success')
			setThumbnail(undefined)

			setTimeout(() => {
				setFormStatus('default')
			}, 3000)
			setPostSaved(data)
		})
	}

	const setDataFromUrl = (url: string) => {
		const validUrl = urlValidator(url)
		if (!validUrl) return
		getUrlMetadata(url).then(({ title, image }) => {
			setTitle(title)
			if (!image) return
			setThumbnail(image)
			setImage(image)
		})
	}

	const debouncedSetDataFromUrl = debounce(500, setDataFromUrl)

	const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		const url = value.trim()

		setUrl(url)
		debouncedSetDataFromUrl(url)
	}

	const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const handleLoadImage = (file: File) => {
		setImage(file)
	}

	const removeFormImage = () => {
		removeImage()
		setThumbnail(undefined)
	}

	return (
		<>
			<section>
				<h3 className="subtitle">Comparte algo que conozcas</h3>
				<form className={style.share_container} onSubmit={handleSubmit}>
					<FormInput
						type="url"
						icon={<LinkIcon size="16" />}
						placeholder="Copia el Link del recurso"
						onInput={handleChangeUrl}
						required
						helperText="Puedes compartir un link de youtube, vimeo, etc."
					/>
					<aside className={style.form_share}>
						<FormGroup>
							<FormInput
								type="text"
								icon={<TitleIcon size="16" />}
								placeholder="Titulo del recurso"
								onInput={handleChangeTitle}
								required
								value={title}
							/>

							<AutocompleteTag />
						</FormGroup>
						<FormGroup>
							<FormImageInput
								h={'240px'}
								thumbnail={thumbnail}
								onLoadImage={handleLoadImage}
								clear={formStatus === 'success'}
								onRemoveImage={removeFormImage}
							/>
						</FormGroup>
					</aside>
					<div className={style.form_submit_container}>
						<button className={style.form_submit} disabled={formStatus === 'loading'}>
							Crear
						</button>
					</div>
				</form>
			</section>
			{postSaved && (
				<section className={style.postResult}>
					<PostComponent {...postSaved} />
				</section>
			)}
		</>
	)
}
