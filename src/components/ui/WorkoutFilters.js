// ./src/components/WorkoutFilters.js
import React, { useState } from "react"
import TextInput from "../inputs/TextInput"

const WorkoutFilters = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [nameSearch, setNameSearch] = useState("")

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}
	return (
		<div>
			<button onClick={handleToggle}>
				{isExpanded ? (
					<img src='/filter-on.svg' alt='' />
				) : (
					<img src='/filter-off.svg' alt='' />
				)}
			</button>
			<div className={`expandable-section ${isExpanded ? "expanded" : ""}`}>
				<TextInput label='Search' value={nameSearch} onChange={setNameSearch} />
				<p>{nameSearch}</p>
			</div>
			<style jsx>{`
				.expandable-section {
					max-height: 0;
					overflow: hidden;
					transition: max-height 0.4s ease-in-out;
				}

				.expandable-section.expanded {
					max-height: 300px; /* You can adjust this value */
				}
				button {
					border: 0px;
				}
				img {
					width: 25px;
				}
			`}</style>
		</div>
	)
}

export default WorkoutFilters
