import { ChangeEvent } from 'react'

import Tooltip from 'components/Tooltip'
import Avatar from 'components/Avatar'

//utils
import { useUser } from 'hooks/useUser'
import Button from 'components/shared/Button'

export default function NavbarRightContent() {
	const { user } = useUser()

	const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked
		if (checked) {
			document.body.setAttribute('data-theme', 'dark')
		} else {
			document.body.setAttribute('data-theme', 'light')
		}
	}

	return (
		<>
			<label className="theme-btn">
				<input
					onChange={toggleTheme}
					type="checkbox"
					name="theme"
					id="theme-checkbox"
					className="theme-checkbox"
					hidden
				/>
				<i className="uil uil-sun light-theme-icon"></i>
				<i className="uil uil-moon dark-theme-icon"></i>
			</label>
			{user ? (
				<>
					<Button to="/share">Crear</Button>

					<Tooltip content={<UserOptions />}>
						<Avatar src={user.user?.image || ''} alt={user.user?.name || ''} size="md" />
					</Tooltip>
				</>
			) : (
				<Button to="/login">Login</Button>
			)}
		</>
	)
}

function UserOptions() {
	const { signOut } = useUser()
	return (
		<>
			<div className="container">
				<Button color="secondary">Settings</Button>
				<Button onClick={() => signOut()}>Loggout</Button>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.5rem;
				}
			`}</style>
		</>
	)
}
