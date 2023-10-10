// File: src/components/inputs/CheckboxList.js
import styles from "./CheckboxList.module.css" // Import the styles object

export default function CheckboxList({
	label,
	options,
	selectedOptions,
	onChange,
}) {
	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target

		let newSelectedOptions = [...selectedOptions]
		if (checked) {
			newSelectedOptions.push(name)
		} else {
			newSelectedOptions = newSelectedOptions.filter(
				(option) => option !== name
			)
		}

		onChange(newSelectedOptions)
	}

	return (
		<div>
			<label>{label}</label>
			{options.map((option, index) => (
				<div key={index} className={styles.checkboxItem}>
					<label>
						<input
							type="checkbox"
							name={option}
							checked={selectedOptions.includes(option)}
							onChange={handleCheckboxChange}
							className={styles.checkbox}
						/>
						<span className={styles.checkboxLabel}>{option}</span>
					</label>
				</div>
			))}
		</div>
	)
}
