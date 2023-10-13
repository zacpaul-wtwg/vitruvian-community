// File: src/hooks/useFetch.js
import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		console.log("useFetch is running")
		console.log("URL:", url)
		console.log("Options:", options)
		const fetchData = async () => {
			try {
				const response = await fetch(url, options)
				if (!response.ok) {
					throw new Error("Network response was not ok")
				}
				const result = await response.json()
				setData(result.body)
			} catch (error) {
				setError(error)
			}
		}
		fetchData()
	}, [])

	return { data, error }
}
