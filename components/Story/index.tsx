import Avatar from 'components/Avatar'
import type { StoryProps } from 'components/Story/type'

export default function Story({ username, project_poster, profile }: StoryProps) {
	return (
		<li className="story" style={{ backgroundImage: `url(${project_poster})` }}>
			<Avatar src={profile} alt={username} />
			<p className="story-name">{username}</p>
		</li>
	)
}
