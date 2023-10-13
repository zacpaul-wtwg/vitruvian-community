// File path: src/components/MemberLayout.js
import { withAuthenticator } from "@aws-amplify/ui-react"
import CommonLayout from "./CommonLayout"

function MemberLayoutContent({ children, signOut }) {
	return <CommonLayout>{children}</CommonLayout>
}

const MemberLayout = withAuthenticator(MemberLayoutContent)
export default MemberLayout
