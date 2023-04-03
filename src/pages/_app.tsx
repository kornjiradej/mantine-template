import { ReactElement, ReactNode, useState } from 'react'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core'
import Head from 'next/head'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page)

	const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
					}}
				>
					{getLayout(<Component {...pageProps} />)}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	)
}
