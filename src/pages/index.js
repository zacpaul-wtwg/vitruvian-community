// src/pages/Workouts.js
import WorkoutCard from "@/components/ui/WorkoutCard"
import WorkoutFilters from "@/components/ui/WorkoutFilters"
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
		<div>
			<h1>Shared Workouts</h1>
			<WorkoutFilters />
			{Array.isArray(data) ? (
				data.map((workout, index) => <WorkoutCard key={index} data={workout} />)
			) : (
				<p>Loading...</p> // You can display a loading message or spinner here
			)}
		</div>
	)
}
