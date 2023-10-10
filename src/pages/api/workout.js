// File path: pages/api/hello.js

export default function handler(req, res) {
	if (req.method === "POST") {
		const { name, age } = req.body // Destructure the JSON payload from the request body
		res
			.status(200)
			.json({ message: `Hello, ${name}! You are ${age} years old.` })
	} else {
		res.status(405).json({ message: "Method not allowed" })
	}
}
