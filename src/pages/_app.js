// File: src/pages/_app.js
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import awsExports from "../aws-exports"
import "../styles/globals.css"
import PublicLayout from "../components/layouts/PublicLayout"
import MemberLayout from "../components/layouts/MemberLayout"

Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps, router }) {
	const isMemberRoute = router.pathname.startsWith("/member")
	let Layout = isMemberRoute ? MemberLayout : PublicLayout
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
export default MyApp
