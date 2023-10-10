// File: src/pages/api/insertWorkout.js

import supabaseClient from "@/utils/supabaseClient"

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).end()
	}

	const { usersub, link, name, description, accessories, tags } = req.body // Include description and tags

	const supabase = supabaseClient()

	// Update here to include description and tags
	const { error } = await supabase.from("workouts").insert({
		usersub,
		link,
		name,
		description, // Added description
		accessories, // Added accessories
		tags, // Added tags
	})

	if (error) {
		console.log(error)
		return res.status(400).json({
			message:
				"There was a problem saving your workout. Please try again. If the problem persists, contact the website administrator.",
		})
	}

	res.status(200).json({ message: `Submission of workout ${name} successful.` })
}
