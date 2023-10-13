// src/components/inputs/TextArea.js
export default function TextArea({ label, value, onChange }) {
	return (
		<label>
			<h2>{label}</h2>
			<textarea value={value} onChange={(e) => onChange(e.target.value)} />
		</label>
	)
}
