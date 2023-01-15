import SunIcon from 'remixicon-react/SunLineIcon'
import MoonIcon from 'remixicon-react/MoonLineIcon'

import Tooltip from 'components/Tooltip'
import Avatar from 'components/Avatar'

//utils
import { useUser } from 'hooks/useUser'
import Button from 'components/shared/Button'
import { useTheme } from 'context/Theme'

export default function NavbarRightContent() {
	const { user } = useUser()
	const { toggleTheme, theme } = useTheme()

	return (
		<>
			<button className="theme-btn" onClick={toggleTheme}>
				{theme === 'light' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
			</button>
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
