import NextLink from 'next/link'

import NavbarRightContent from 'components/Navbar/NavbarRightContent'
import SearchBar from 'components/Navbar/SearchBar'

import styles from './style.module.css'

export default function Layout() {
	return (
		<nav className="navbar">
			<div className={styles.container}>
				<NextLink href="/">
					<a>
						<h2 className={styles.logo}>Juntos_</h2>
						<h2 className={styles.logoMobile}>J_</h2>
					</a>
				</NextLink>
				<SearchBar />

				<NavbarRightContent />
			</div>
		</nav>
	)
}
