// File: src/components/inputs/CheckboxList.js

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
			<div className='group'>
				<label>
					<h2>{label}</h2>
				</label>
				{Object.keys(options).map((key) => (
					<div key={key}>
						<div>
							<h3>{key}</h3>
						</div>
						{options[key].map((option, index) => (
							<div key={index} className='checkboxItem'>
								<label>
									<input
										type='checkbox'
										name={option}
										checked={selectedOptions.includes(option)}
										onChange={handleCheckboxChange}
										className='checkbox'
									/>
									<span className='checkboxLabel'>{option}</span>
								</label>
							</div>
						))}
					</div>
				))}
			</div>

			<style jsx>{`
				.group {
					padding: 20px;
					background-color: var(--light-grey);
					margin: 5px;
					border-radius: 5px;
				}
				.checkboxItem {
					display: inline-block;
					position: relative;
				}

				.checkbox {
					position: absolute;
					opacity: 0;
					z-index: -1;
				}

				.checkboxLabel {
					display: inline-block;
					padding: 8px 12px;
					margin: 4px;
					border: 2px solid #ccc;
					border-radius: 4px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}

				input[type="checkbox"]:checked + .checkboxLabel {
					background-color: #007bff;
					color: #ffffff;
					border-color: #007bff;
				}
			`}</style>
		</div>
	)
}
