// File path: pages/index.js

import { useEffect, useState } from "react"

export default function Home() {
	const [message, setMessage] = useState("")

	useEffect(() => {
		fetch("/api/workout")
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
			.catch((error) => console.error("Error fetching data:", error))
	}, [])

	return (
		<div>
			<h1>Hello Next.js!</h1>
			<p>{message}</p>
		</div>
	)
}
