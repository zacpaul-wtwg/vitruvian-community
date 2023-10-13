// ./src/pages/workouts/[id]/[name].js
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Workouts() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const router = useRouter()
	const { id, name } = router.query // Acknowledge 'name', but it won't affect the query

	useEffect(() => {
		if (id) {
			// Only 'id' is needed for the query
			const fetchData = async () => {
				try {
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

					setData(result.body)
				} catch (error) {
					setError(error)
				}
			}

			fetchData()
		}
	}, [id, name]) // Effect re-runs if either 'id' or 'name' changes

	return data ? (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
		</div>
	) : (
		"Loading..."
	)
}
