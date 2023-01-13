import Tag from 'components/Tag'

import type { Tag as TypeTag } from 'models/tag'

import style from 'components/Tag/tag.module.css'

export default function TagList({ tags }: { tags: TypeTag[] }) {
	return (
		<ul className={style.tags_list}>
			{tags.map((tag) => (
				<Tag key={tag.id.toString()} text={tag.name} randomColor />
			))}
		</ul>
	)
}
