// src/components/inputs/TextInput.js
export default function TextInput({ label, value, onChange }) {
	return (
		<label>
			<h2>{label}</h2>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</label>
	)
}
