import CloseIcon from 'remixicon-react/CloseLineIcon'

import style from './autocomplete.module.css'

import type { AutocompleteOutputProps } from 'components/Pages/Share/AutocompleteTag/types'

export default function AutocompleteOutput(props: AutocompleteOutputProps) {
	const { options, onClick } = props

	return (
		<ul className={style.output_list}>
			{options.map((item) => (
				<button
					type="button"
					className={style.output_item}
					key={item.id}
					onClick={() => onClick(item)}
				>
					<span>{item.name}</span>
					<CloseIcon size={16} strokeWidth={0.5} />
				</button>
			))}
		</ul>
	)
}
