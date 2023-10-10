// src/pages/Workouts.js

import React, { useEffect, useState } from "react"

export default function Workouts() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/getWorkouts", {
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
	}, [])

	return (
		<>
			{error && <p>Error: {error.message}</p>}
			{data && (
				<ul>
					{data.map((workout, index) => (
						<li key={index}>
							{workout.name /* Replace 'name' with actual field name */}
						</li>
					))}
				</ul>
			)}
		</>
	)
}
