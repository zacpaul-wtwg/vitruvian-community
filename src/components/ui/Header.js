// ./src/components/Header.js
import React from "react"

const Header = () => {
	return (
		<div className='header'>
			<strong>Vitruvian Community Online</strong>
			<style jsx>{`
				.header {
					background-color: var(--main-color);
					padding: 10px;
					text-align: center;
					box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
					color: var(--white);
				}
			`}</style>
		</div>
	)
}

export default Header
