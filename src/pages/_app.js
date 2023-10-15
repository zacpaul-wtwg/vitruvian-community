// File: src/pages/_app.js
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import awsExports from "../aws-exports"

import "../styles/normalize.css"
import "../styles/vars.css"
import "../styles/globals.css"
import PublicLayout from "../components/layouts/PublicLayout"
import MemberLayout from "../components/layouts/MemberLayout"

import Head from "next/head"

Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps, router }) {
	const isMemberRoute = router.pathname.startsWith("/member")
	let Layout = isMemberRoute ? MemberLayout : PublicLayout

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
				/>

				<meta name='pwa-demo' content='pwa-demo' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='pwa-demo' />
				<meta name='description' content='pwa-demo' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='msapplication-TileColor' content='#2B5797' />
				<meta name='msapplication-tap-highlight' content='no' />
				<meta name='theme-color' content='#000000' />

				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
