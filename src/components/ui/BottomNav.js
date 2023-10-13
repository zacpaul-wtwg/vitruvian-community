// File path: ./src/components/bottomnav/BottomNav.js
import React, { useContext } from "react"
import Link from "next/link"
import { UserContext } from "../../contexts/UserContext" // Adjust the import path as needed
import { Auth } from "aws-amplify"

const navLinks = [
	{ name: "/dumbbell.svg", route: "/", class: "dumb" },
	{ name: "/create.svg", route: "/members/submitWorkout", class: "create" },
	{ name: "/user.svg", route: "/members/profile", class: "user" },
]

const BottomNav = () => {
	const { user, setUser } = useContext(UserContext)

	const signOut = async () => {
		try {
			await Auth.signOut()
			setUser(null)
		} catch (error) {
			console.error("Error signing out: ", error)
		}
	}

	return (
		<>
			<div className='bottom-nav'>
				{navLinks.map((link, index) => (
					<Link key={index} href={link.route}>
						<div id={`${link.class}-container`}>
							<img src={link.name} alt='' className='icons' id={link.class} />
						</div>
					</Link>
				))}
			</div>
			<style jsx>{`
				.bottom-nav {
					background-color: var(--main-color);
					display: flex;
					justify-content: center;
					position: fixed;
					bottom: 0;
					left: 0;
					right: 0;
					padding: 10px;
					box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
				}
				button {
					margin: 10px;
				}
				.icons {
					height: 40px;
					margin: 0px 20px;
				}
				#create {
					background-color: var(--main-color);
					padding: 10px;
					height: 80px; /* Adjusted height */
					position: relative;
					margin: 0px;
					bottom: 30px;
					border-radius: 50%;
				}
				#create-container {
					height: 0px;
				}
			`}</style>
		</>
	)
}

export default BottomNav
