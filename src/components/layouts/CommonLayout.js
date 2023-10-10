// File path: src/components/layouts/CommonLayout.js
import React from "react"
import { UserProvider } from "../../contexts/UserContext"

function CommonLayout({ children }) {
	return (
		<div className="container">
			<div className="content">
				<UserProvider>
					<div>
						{React.Children.map(children, (child) => {
							// Clone the child component and pass the additional props
							return React.cloneElement(child)
						})}
					</div>
				</UserProvider>
			</div>
		</div>
	)
}

export default CommonLayout
