import { debounce } from 'throttle-debounce'
import { ChangeEvent, useState } from 'react'

import PostList from 'components/Post/PostList'

import { search } from 'services/post'

import { Post } from 'models/post'

import styles from './Explore.module.css'
import Loader from 'components/shared/Loader'

const categories = [
	{
		name: 'Programación',
		value: 'programing',
	},
	{
		name: 'Diseño',
		value: 'design',
	},
	{
		name: 'Música',
		value: 'music',
	},
	{
		name: 'Cine',
		value: 'cine',
	},
]

export default function Explore() {
	const [postResult, setPostResult] = useState<Post[]>([])
	const [loading, setLoading] = useState(false)
	const [query, setQuery] = useState<string | null>(null)

	const searchPost = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		if (value.trim().length < 2) return
		setLoading(true)
		search(value)
			.then((posts) => {
				setPostResult(posts)
				setQuery(value)
			})
			.finally(() => setLoading(false))
	}

	const debouncedSearchPost = debounce(500, searchPost)

	return (
		<>
			<label htmlFor="explore">
				<h3>Explore here</h3>
			</label>
			<div className={styles.form}>
				<div className={styles.inputContainer}>
					<input
						type="search"
						name=""
						id="explore"
						className={styles.search}
						placeholder="¿Qué quieres aprender hoy?"
						onChange={debouncedSearchPost}
					/>
					{loading && (
						<div className={styles.loader}>
							<Loader size={32} />
						</div>
					)}
				</div>
				<ul className={styles.category_list}>
					{categories.map(({ value, name }) => (
						<li key={value}>
							<input className={styles.category_input} type="checkbox" id={value} hidden />
							<label htmlFor={value} className={styles.category}>
								{name}
							</label>
						</li>
					))}
				</ul>
			</div>

			{query && (
				<h4 className="subtitle-sm">
					Resultados para <span className="text-primary">{query}</span>
				</h4>
			)}

			<PostList posts={postResult} />
		</>
	)
}
