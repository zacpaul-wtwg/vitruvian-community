// File path: src/components/inputs/TagsInput.js
import React, { useState } from "react"

export default function TagsInput({
	label,
	currentTag,
	setCurrentTag,
	tags,
	setTags,
}) {
	const [showAlert, setShowAlert] = useState(false) // State to control the alert

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()

			// Only add the tag if it's not already in the array
			if (!tags.includes(currentTag)) {
				setTags((prevTags) => [...prevTags, currentTag])
				setCurrentTag("")
				setShowAlert(false)
			} else {
				setShowAlert(true)
			}
		}
	}

	const handleTagDelete = (tagToRemove) => {
		const updatedTags = tags.filter((tag) => tag !== tagToRemove)
		setTags(updatedTags)
	}

	return (
		<div>
			<label>
				<h2>{label}</h2>
				{showAlert && <span> Tag already exists!!</span>}
			</label>
			<input
				type='text'
				value={currentTag}
				placeholder='Enter a tag and hit Enter'
				onChange={(e) => setCurrentTag(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<div className='tags-parent'>
				{tags.length > 0 && <div>Current Tags</div>}
				{tags.map((tag, index) => {
					return (
						<div key={index} className='tags'>
							<span onClick={() => handleTagDelete(tag)}>&#x274C;</span> {tag}
						</div>
					)
				})}
			</div>

			<style jsx>{`
				.tags {
					background-color: rgb(224, 224, 224);
					display: inline-block;
					margin: 3px;
					padding: 3px 7px;
					border-radius: 3px;
					cursor: pointer;
				}
			`}</style>
		</div>
	)
}
