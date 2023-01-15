import { createContext, useContext, useEffect, useState } from 'react'
import { setCookie } from 'cookies-next'

export type Theme = 'light' | 'dark'

export const COOKIE_THEME_KEY = 'data-theme'

type Context = {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<Context>({
	theme: 'light',
	toggleTheme: () => {},
})

type ProviderProps = {
	children: React.ReactNode | React.ReactNode[]
	theme: Theme
}

export default function ThemeProvider({ children, theme }: ProviderProps) {
	const [userTheme, setUserTheme] = useState(theme)

	useEffect(() => {
		console.log({ userTheme, theme })
		document.body.setAttribute(COOKIE_THEME_KEY, userTheme)
	}, [userTheme, theme])

	const saveTheme = (theme: Theme) => {
		setCookie(COOKIE_THEME_KEY, theme, {
			maxAge: 30 * 24 * 60 * 60,
		})
	}

	const toggleTheme = () => {
		if (userTheme === 'light') {
			setUserTheme('dark')
			saveTheme('dark')
		} else {
			setUserTheme('light')
			saveTheme('light')
		}
	}

	return (
		<ThemeContext.Provider value={{ theme: userTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const { theme, toggleTheme } = useContext(ThemeContext)
	return { theme, toggleTheme }
}
