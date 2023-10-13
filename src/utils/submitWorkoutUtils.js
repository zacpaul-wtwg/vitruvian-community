// File: src/utils/submitWorkoutUtils.js

export const handleSubmit = async (
	user,
	workoutLink,
	workoutName,
	description,
	selectedAccessories,
	selectedMuscles,
	tags,
	setIsSubmitted,
	setResponseMessage
) => {
	console.log("Inside handleSubmit") // Debugging line
	const response = await fetch("/api/insertWorkout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			usersub: user.attributes.sub,
			link: workoutLink,
			name: workoutName,
			description: description,
			accessories: selectedAccessories,
			muscles: selectedMuscles,
			tags: tags,
		}),
	})

	if (response.ok) {
		const data = await response.json()
		console.log("Response Data:", data) // Debugging line
		setIsSubmitted(true)
		setResponseMessage(data.message)
	} else {
		setIsSubmitted(false)
		setResponseMessage("Submission failed.")
	}
}
