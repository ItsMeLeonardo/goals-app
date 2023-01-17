import { ReactNode } from 'react'

import MainLayout from 'components/Layout'
import Sidebar from 'components/Sidebar'
import RightContent from './RightContent'

import styles from './userLayout.module.css'

interface Props {
	children: ReactNode
}

export default function UserLayout({ children }: Props) {
	return (
		<MainLayout>
			<div className={styles.body_grid}>
				<section className={styles.left_content}>
					<Sidebar />
				</section>

				<section className={styles.main_content}>{children}</section>

				<section className={styles.right_content}>
					<RightContent />
				</section>
			</div>
		</MainLayout>
	)
}
