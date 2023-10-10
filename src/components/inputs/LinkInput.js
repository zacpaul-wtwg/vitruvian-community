// src/components/inputs/TextArea.js
export default function LinkInput({ label, value, onChange }) {
	return (
		<label>
			{label}
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</label>
	)
}
