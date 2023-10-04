// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from "react"
import { Auth } from "aws-amplify"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => setUser(user))
			.catch((err) => console.log(err))
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
