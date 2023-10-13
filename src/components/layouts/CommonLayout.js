// File path: src/components/layouts/CommonLayout.js
import React from "react"
import { UserProvider } from "../../contexts/UserContext"
import BottomNav from "../ui/BottomNav"
import Header from "../ui/Header"
import Footer from "../ui/Footer"

function CommonLayout({ children }) {
	return (
		<>
			<Header></Header>
			<div className='container'>
				<div className='content'>
					<UserProvider>
						<div>
							{React.Children.map(children, (child) => {
								// Clone the child component and pass the additional props
								return React.cloneElement(child)
							})}
						</div>
						<Footer />
						<BottomNav></BottomNav>
					</UserProvider>
				</div>
			</div>
			<style jsx>
				{`
					.container {
						display: flex;
						justify-content: center;
					}

					.content {
						max-width: 900px;
						margin: 10px;
					}
				`}
			</style>
		</>
	)
}

export default CommonLayout
