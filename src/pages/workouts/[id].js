// ./src/pages/workouts/[id].js
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Workouts() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const router = useRouter()
	const { id } = router.query

	useEffect(() => {
		if (id) {
			// Only run if 'id' is available
			const fetchData = async () => {
				try {
					// Adding id as a query parameter
					const response = await fetch(`/api/getWorkout?id=${id}`, {
						method: "GET",
						headers: {
							"Content-type": "application/json",
						},
					})

					if (!response.ok) {
						throw new Error("Network response was not ok")
					}

					const result = await response.json()

					// Assuming the data you want to display is in `result.body`
					setData(result.body)
				} catch (error) {
					setError(error)
				}
			}

			fetchData()
		}
	}, [id]) // Re-run the effect when 'id' changes

	console.log(data)

	return data ? (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
		</div>
	) : (
		"Loading..."
	)
}
