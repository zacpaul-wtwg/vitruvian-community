// File: src/pages/index.js
import WorkoutCard from "@/components/ui/WorkoutCard"
import WorkoutFilters from "@/components/ui/WorkoutFilters"
import React, { useState } from "react"
import { useFetch } from "@/hooks/useFetch"

export default function Workouts() {
	const { data, error } = useFetch("/api/getWorkouts", {
		method: "GET",
		headers: {
			"Content-type": "application/json",
		},
	})
	const [search, setSearch] = useState("")

	return (
		<div>
			<h1>Shared Workouts</h1>
			<WorkoutFilters search={search} setSearch={setSearch} />
			{data ? (
				data
					.filter((workout) =>
						search
							? workout.tags.some((tag) =>
									tag.toLowerCase().startsWith(search.toLowerCase())
							  )
							: true
					)
					.map((workout, index) => <WorkoutCard key={index} data={workout} />)
			) : (
				<p>...loading</p>
			)}
			{console.log(search)}
		</div>
	)
}
