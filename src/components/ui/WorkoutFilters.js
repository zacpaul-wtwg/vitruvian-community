// File: ./src/components/WorkoutFilters.js
import React, { useState, useEffect } from "react"
import TextInput from "../inputs/TextInput"

const WorkoutFilters = ({ search, setSearch }) => {
	useEffect(() => {
		console.log("WorkoutFilters component rendered.")
	}, [])
	const [isExpanded, setIsExpanded] = useState(false)

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
				<TextInput label='Search' value={search} onChange={setSearch} />
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
			`}</style>{" "}
		</div>
	)
}

export default WorkoutFilters
