// File path: ./src/pages/api/getWorkout.js
import supabaseClient from "@/utils/supabaseClient"

export default async function getWorkout(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ message: "Method not allowed" })
	}

	const { id } = req.query // Extract 'id' from query parameters

	if (!id) {
		return res.status(400).json({ message: "ID is required" })
	}

	const supabase = supabaseClient()

	try {
		const { data, error } = await supabase
			.from("workouts")
			.select()
			.eq("id", id)
			.single() // This will fetch only one record that matches the condition

		if (error) {
			throw error
		}

		if (!data) {
			return res.status(404).json({ message: "Workout not found" })
		}

		return res
			.status(200)
			.json({ message: "Workout successfully retrieved", body: data })
	} catch (error) {
		console.error("An error occurred:", error)
		return res.status(500).json({
			message:
				"An error occurred while retrieving the workout. Please try again.",
		})
	}
}
