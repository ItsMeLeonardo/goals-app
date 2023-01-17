import { ReactNode } from 'react'
import styles from './mainLayout.module.css'
interface Props {
	children: ReactNode
}

//components
import Navbar from 'components/Navbar'

export default function Layout({ children }: Props) {
	return (
		<section>
			<Navbar />
			<main className={styles.container}>{children}</main>
		</section>
	)
}
