import { createClient } from "@supabase/supabase-js"

export default function supabaseCLient() {
	const supabaseUrl = "https://djxocjnfpkijvrtcijby.supabase.co"
	const supabaseKey = process.env.SUPABASE_KEY
	const supabase = createClient(supabaseUrl, supabaseKey)

	return supabase
}
