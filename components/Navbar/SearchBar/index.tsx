import { useState, ChangeEvent } from 'react'
import { debounce } from 'throttle-debounce'

import SearchResults from 'components/Navbar/SearchBar/SearchResults'

import { search } from 'services/post'

import type { Post } from 'models/post'

import styles from './searchBar.module.css'

export default function SearchBar() {
	const [results, setResults] = useState<Post[]>([])

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		if (value.length > 2) {
			search(value).then(setResults)
		} else {
			setResults([])
		}
	}

	const debouncedHandleSearch = debounce(500, handleSearch)

	return (
		<label className={styles.search_bar}>
			<span className={styles.icon}>
				<i className="uil uil-search"></i>
			</span>
			<input
				className={styles.input}
				type="search"
				autoComplete="off"
				name="search"
				onChange={debouncedHandleSearch}
				id="search"
				placeholder="Busca por creadores, proyectos o temas"
			/>
			{results.length > 0 && <SearchResults results={results} />}
		</label>
	)
}
