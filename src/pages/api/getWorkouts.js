// src/pages/api/getWorkouts.js

import supabaseClient from "@/utils/supabaseClient"

export default async function getWorkouts(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ message: "Method not allowed" })
	}

	const supabase = supabaseClient()

	try {
		const { data, error } = await supabase.from("workouts").select()

		if (error) {
			throw error
		}

		return res
			.status(200)
			.json({ message: "Workouts successfully retrieved", body: data })
	} catch (error) {
		console.error(error)
		return res.status(500).json({
			message:
				"An error occurred while retrieving the workouts. Please try again.",
		})
	}
}
