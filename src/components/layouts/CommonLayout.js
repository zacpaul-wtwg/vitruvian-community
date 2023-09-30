import Navigation from "@ui/Navigation"

function CommonLayout({ children }) {
	return (
		<div>
			<Navigation />
			<div>
				<main>{children}</main>
			</div>
			<footer>{/* Your footer content */}</footer>
		</div>
	)
}
export default CommonLayout
