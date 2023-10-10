// src/components/inputs/TagsInput.js
export default function TagsInput({
	label,
	currentTag,
	setCurrentTag,
	tags,
	setTags,
}) {
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			setTags((prevTags) => [...prevTags, currentTag])
			setCurrentTag("")
		}
	}
	return (
		<div>
			<label>{label}</label>
			<input
				type="text"
				value={currentTag}
				placeholder="Enter a tag and hit Enter"
				onChange={(e) => setCurrentTag(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<div className="tags-parent">
				Current Tags:
				{tags.map((tag, index) => {
					return (
						<div key={index} className="tags">
							{tag}
						</div>
					)
				})}
			</div>
		</div>
	)
}
