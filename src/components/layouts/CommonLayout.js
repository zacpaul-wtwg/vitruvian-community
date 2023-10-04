// File path: src/components/layouts/CommonLayout.js
import React from "react"
import { UserProvider } from "../../contexts/UserContext"

function CommonLayout({ children, renderedAt }) {
	return (
		<UserProvider>
			<div>
				<p>Rendered at: {renderedAt}</p>
				{React.Children.map(children, (child) => {
					// Clone the child component and pass the additional props
					return React.cloneElement(child, { renderedAt })
				})}
			</div>
		</UserProvider>
	)
}

export default CommonLayout
