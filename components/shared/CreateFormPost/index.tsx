import Avatar from 'components/Avatar'
import { useUser } from 'hooks/useUser'

import styles from './styles.module.css'
import Button from '../Button'

export default function CreateFormPost() {
	const { user } = useUser()

	return (
		<label className={styles.container}>
			<div className={styles.avatar}>
				{user && <Avatar src={user.user?.image || ''} alt={user.user?.name || ''} size="md" />}
			</div>
			<input
				type="text"
				placeholder={`¿Qué tienes en mente?`}
				id="create-post"
				className={styles.input}
				autoComplete="off"
			/>
			<div className={styles.button}>
				<Button to="/share">Crear</Button>
			</div>
		</label>
	)
}
