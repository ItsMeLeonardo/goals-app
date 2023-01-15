import App, { type AppProps, type AppContext } from 'next/app'
import { SWRConfig, SWRConfiguration } from 'swr'
import { SessionProvider } from 'next-auth/react'
import { getCookie } from 'cookies-next'

//components
import MainLayout from 'components/Layout'
import RequireAuth from 'components/RequireAuth'
import UserLayout from 'components/Layout/UserLayout'

//context
import ThemeProvider, { type Theme, COOKIE_THEME_KEY } from 'context/Theme'

//types
type RequireAuthComponent = {
	requireAuth?: boolean
} & AppProps['Component']

type Props = {
	Component: RequireAuthComponent
	theme: Theme
} & AppProps

//styles
import '../styles/globals.css'
import 'tippy.js/dist/tippy.css'

//swr config
const config: SWRConfiguration = {
	revalidateOnFocus: false,
}

function MyApp(props: Props) {
	const {
		Component,
		theme,
		pageProps: { session, ...pageProps },
	} = props
	return (
		<ThemeProvider theme={theme}>
			<SWRConfig value={config}>
				<SessionProvider session={session}>
					{Component.requireAuth ? (
						<RequireAuth>
							<UserLayout>
								<Component {...pageProps} />
							</UserLayout>
						</RequireAuth>
					) : (
						<MainLayout>
							<Component {...pageProps} />
						</MainLayout>
					)}
				</SessionProvider>
			</SWRConfig>
		</ThemeProvider>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const ctx = await App.getInitialProps(appContext)

	const theme = getCookie(COOKIE_THEME_KEY, appContext.ctx)

	return {
		...ctx,
		theme: theme || 'light',
	}
}

export default MyApp
