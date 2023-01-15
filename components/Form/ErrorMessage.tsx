import styles from './form.module.css'

type Props = {
	message: string
}

export default function ErrorMessage({ message }: Props) {
	return <div className={styles.error_message}>{message}</div>
}
