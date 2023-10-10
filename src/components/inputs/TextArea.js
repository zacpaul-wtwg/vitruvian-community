// src/components/inputs/TextArea.js
export default function TextArea({ label, value, onChange }) {
	return (
		<label>
			{label}
			<textarea value={value} onChange={(e) => onChange(e.target.value)} />
		</label>
	)
}
