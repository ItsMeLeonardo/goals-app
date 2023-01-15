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
import Loader from 'components/shared/Loader'

export default function FormShare() {
	const { formState, setImage, setTitle, setUrl, reset, removeImage } = useShare()
	const { user } = useUser()

	const [thumbnail, setThumbnail] = useState<string | undefined>()
	const [isSaving, setIsSaving] = useState(false)
	const [isGettingUrlData, setIsGettingUrlData] = useState(false)
	const [postSaved, setPostSaved] = useState<Post | null>(null)

	const { title, url } = formState

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = event.target as HTMLFormElement
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

		setIsSaving(true)

		create(postBody, formState.image)
			.then((data) => {
				reset()
				setThumbnail(undefined)

				setPostSaved(data)
				form.reset()
			})
			.finally(() => {
				setIsSaving(false)
			})
	}

	const setDataFromUrl = (url: string) => {
		const validUrl = urlValidator(url)
		if (!validUrl) return
		setIsGettingUrlData(true)
		getUrlMetadata(url)
			.then(({ title, image }) => {
				setTitle(title)
				if (!image) return
				setThumbnail(image)
				setImage(image)
			})
			.finally(() => {
				setIsGettingUrlData(false)
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

	const isLoading = isGettingUrlData || isSaving

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
						helperText="Pega el link y se completaran los campos"
						disabled={isLoading}
						loading={isGettingUrlData}
					/>
					<aside className={style.form_share}>
						<FormGroup>
							<FormInput
								type="text"
								icon={<TitleIcon size="16" />}
								placeholder="Titulo del recurso"
								onInput={handleChangeTitle}
								required
								disabled={isSaving}
								loading={isGettingUrlData}
								value={title}
							/>

							<AutocompleteTag disabled={isLoading} />
						</FormGroup>
						<FormGroup>
							<FormImageInput
								h={'240px'}
								thumbnail={thumbnail}
								onLoadImage={handleLoadImage}
								disabled={isLoading}
								onRemoveImage={removeFormImage}
								loading={isGettingUrlData}
							/>
						</FormGroup>
					</aside>
					<div className={style.form_submit_container}>
						<button className={style.form_submit} disabled={isLoading}>
							{isSaving ? (
								<Loader color="light" size={13} />
							) : isGettingUrlData ? (
								'Obteniendo datos'
							) : (
								'Compartir'
							)}
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
