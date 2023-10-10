// In Profile.js or any other component
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

function Profile() {
	const { user } = useContext(UserContext)
	return (
		<div style={{ padding: 50 }}>
			<h1>Logged in as {user ? user.username : "Loading..."}.</h1>
			<p>{user ? user.attributes.email : "Loading..."}</p>
			<p>{user ? user.attributes.sub : "Loading..."}</p>
			{console.log(user)}
		</div>
	)
}

export default Profile
