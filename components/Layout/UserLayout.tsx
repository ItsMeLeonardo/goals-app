import { ReactNode } from 'react'

import MainLayout from 'components/Layout'
import Sidebar from 'components/Sidebar'
import RightContent from './RightContent'

interface Props {
	children: ReactNode
}

export default function UserLayout({ children }: Props) {
	return (
		<MainLayout>
			<div className="container">
				<section className="left">
					<Sidebar />
				</section>

				<section className="middle">{children}</section>

				<section className="right">{/* <RightContent /> */}</section>
			</div>
		</MainLayout>
	)
}
