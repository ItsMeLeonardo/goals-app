import Image from 'next/image'
import styles from './feed.module.css'

type Props = {
	thumbnail: string
}

export default function FeedBody({ thumbnail }: Props) {
	return (
		<section className={styles.feed_body}>
			<picture className={styles.feed_image}>
				<Image height={300} width={700} src={thumbnail} alt="" />
			</picture>
			{/* <div className="feed-photo-grid"></div> */}
		</section>
	)
}
