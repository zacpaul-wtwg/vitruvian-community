// File path: ./src/components/ui/WorkoutCard.js
import React, { useState } from "react"
import Link from "next/link"
import slugify from "../../utils/slugify"

const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" }
	return new Date(dateString).toLocaleDateString(undefined, options)
}

const WorkoutCard = ({ data }) => {
	const [bookmark, setBookmark] = useState(false)
	const handleBookmark = () => {
		setBookmark(!bookmark)
	}
	return (
		<>
			<section className='card'>
				<div className='title-bar'>
					<div>
						<Link href={`/workouts/${data.id}/${slugify(data.name)}`} passHref>
							<strong>
								<span className='link'>&#128170; {data.name}</span>
							</strong>
						</Link>
						<br />
						<em> {formatDate(data.created_at)} </em>
					</div>
					<div className='interactives' onClick={handleBookmark}>
						{bookmark ? (
							<img src='/bookmark-added.svg' alt='bookmark add icon' />
						) : (
							<img src='/bookmark-add.svg' alt='bookmark add icon' />
						)}
					</div>
				</div>
				<div className='card-content'>
					<p>{data.description}</p>
				</div>
				<div className='button-container'></div>
			</section>
			<style jsx>{`
				.card {
					background-color: var(--light-grey);
					margin: 20px;
					border-radius: 10px;
					max-width: 600px;
					position: relative;
				}
				.title-bar {
					background-color: var(--dark-grey);
					padding: 10px 20px;
					color: var(--white);
					border-radius: 10px 10px 0px 0px;
					display: flex;
					justify-content: space-between;
				}
				.card-content {
					padding: 15px;
				}
				.button-container {
					position: absolute;
					bottom: 10px;
					right: 10px;
				}
				.see-workout-button {
					padding: 10px 20px;

					border: none;
					border-radius: 5px;
					cursor: pointer;
				}
				img {
					width: 35px;
				}
				.interactives {
					display: flex;
					align-content: middle;
				}
				.link {
					color: var(--white);
					text-decoration: underline;
				}
				.link:visited {
					color: var(--medium-grey);
				}
				.interactives {
					cursor: pointer;
				}
			`}</style>
		</>
	)
}

export default WorkoutCard
