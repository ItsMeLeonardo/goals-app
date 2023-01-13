import Story from 'components/Story'

const data = [
	{
		profile:
			'https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		username: 'Anna Abel',
		project: 'Project 1',
		project_poster:
			'https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		profile:
			'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		username: 'Gerogina Abel',
		project: 'Project 2',
		project_poster:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		username: 'Antonella Dabner',
		profile:
			'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		project: 'Project 3',
		project_poster:
			'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		username: 'Valeria Dabner',
		profile:
			'https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		project: 'Project 4',
		project_poster:
			'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		username: 'Juan Dabner',
		profile:
			'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		project: 'Project 5',
		project_poster:
			'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	},
	{
		username: 'Antony Dabner',
		profile:
			'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		project: 'Project 6',
		project_poster:
			'https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	},
]

export default function Stories() {
	return (
		<>
			<h3 className="subtitle">Post recientes ({data.length})</h3>
			<aside>
				<ul className="story-list">
					{data.map(({ username, profile, project_poster }) => (
						<Story
							key={username}
							username={username}
							profile={profile}
							project_poster={project_poster}
						/>
					))}
				</ul>
			</aside>
		</>
	)
}
