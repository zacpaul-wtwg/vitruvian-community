// File path: src/components/MemberLayout.js
import CommonLayout from "./CommonLayout"

function MemberLayoutContent({ children }) {
	return (
		<CommonLayout>
			<div>
				<button>Sign out</button>
			</div>
			{children}
		</CommonLayout>
	)
}

const MemberLayout = withAuthenticator(MemberLayoutContent)
export default MemberLayout
