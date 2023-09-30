import { withAuthenticator } from "@aws-amplify/ui-react"
import CommonLayout from "./CommonLayout"

function MemberLayoutContent({ children }) {
	return <CommonLayout>{children}</CommonLayout>
}
const MemberLayout = withAuthenticator(MemberLayoutContent)
export default MemberLayout
