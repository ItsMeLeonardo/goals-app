/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
	},
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'images.unsplash.com',
			'lh3.googleusercontent.com',
			'res.cloudinary.com',
		],
	},
}

module.exports = nextConfig
