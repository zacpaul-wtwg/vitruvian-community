// File: src/pages/members/SubmitWorkout.js
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import TextInput from "../../components/inputs/TextInput"
import TextArea from "../../components/inputs/TextArea"
import TagsInput from "../../components/inputs/TagsInput"
import CheckboxList from "../../components/inputs/CheckboxList"
import accessories from "../../utils/accessories"
import { handleSubmit } from "../../utils/submitWorkoutUtils"
import LinkInput from "@/components/inputs/LinkInput"

export default function SubmitWorkout() {
	const { user } = useContext(UserContext)
	const [workoutName, setWorkoutName] = useState("")
	const [workoutLink, setWorkoutLink] = useState("")
	const [description, setDescription] = useState("")
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [responseMessage, setResponseMessage] = useState("")
	const [selectedAccessories, setSelectedAccessories] = useState([])
	const [tags, setTags] = useState([])
	const [currentTag, setCurrentTag] = useState("")

	useEffect(() => {
		console.log("Is Submitted:", isSubmitted) // To debug state
		console.log("Response Message:", responseMessage) // To debug state
	}, [isSubmitted, responseMessage])

	return (
		<div>
			{isSubmitted ? (
				<div>{responseMessage}</div>
			) : (
				<form>
					<TextInput
						label="Workout Name:"
						value={workoutName}
						onChange={setWorkoutName}
					/>
					<LinkInput
						label="Workout Link:"
						value={workoutLink}
						onChange={setWorkoutLink}
					/>
					<TextArea
						label="Description:"
						value={description}
						onChange={setDescription}
					/>
					<TagsInput
						label="Tags:"
						currentTag={currentTag}
						setCurrentTag={setCurrentTag}
						tags={tags}
						setTags={setTags}
					/>
					<CheckboxList
						label="Accessories Used:"
						options={accessories}
						selectedOptions={selectedAccessories}
						onChange={setSelectedAccessories}
					/>
					<button
						type="button" // Prevent default form submission
						onClick={(e) => {
							e.preventDefault() // Prevent default form submission
							handleSubmit(
								user,
								workoutLink,
								workoutName,
								description,
								selectedAccessories,
								tags,
								setIsSubmitted,
								setResponseMessage
							)
						}}
					>
						Submit Workout
					</button>
				</form>
			)}
		</div>
	)
}
