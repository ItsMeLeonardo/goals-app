import style from './autocomplete.module.css'

import { create } from 'services/tags'

import type {
	AutocompleteResultsProps,
	AutocompleteItem,
} from 'components/Pages/Share/AutocompleteTag/types'
import Loader from 'components/shared/Loader'

export default function AutocompleteResults(props: AutocompleteResultsProps) {
	const { onSelect, results, loading, querySearch } = props

	const addTag = async () => {
		const newTag = await create(querySearch)
		if (!newTag || !newTag.data) return
		const { name, id } = newTag.data

		const tag: AutocompleteItem = {
			id: id.toString(),
			name,
			isSelected: true,
		}
		onSelect(tag)
	}

	return (
		<ul className={style.list}>
			{results.map((item) => (
				<button className={style.item} key={item.id} role="button" onClick={() => onSelect(item)}>
					<span>{item.name}</span>
					<span className={`${style.icon_check} ${item.isSelected && style.icon_check_active}`}>
						<i className="uil uil-check"></i>
					</span>
				</button>
			))}

			{results.length === 0 && !loading && (
				<button className={style.item} onClick={addTag} role="button">
					<p>
						<strong> Click </strong>
						para agregar <strong className="font-i">{querySearch}</strong>
					</p>
				</button>
			)}

			{loading && (
				<li className={style.item}>
					<span>Buscando</span>
					<Loader size={20} />
				</li>
			)}
		</ul>
	)
}
