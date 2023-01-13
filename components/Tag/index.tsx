import style from 'components/Tag/tag.module.css'
import { getSoftColorWithContrast } from 'utils/client/shared/colors/generator'
import { buildCustomProperties } from 'utils/client/shared/styles/customProperties'

type Props = {
	text: string
	randomColor?: boolean
}

export default function Tag({ text, randomColor }: Props) {
	const [color, bg] = randomColor ? getSoftColorWithContrast(40, { from: 195, to: 360 }) : []

	const customProperties = buildCustomProperties({ 'tag-text': color, 'tag-bg': bg })

	return (
		<p className={style.tag_item} style={customProperties} data-random-color={randomColor}>
			<span className={style.tag_text}>{text}</span>
		</p>
	)
}
