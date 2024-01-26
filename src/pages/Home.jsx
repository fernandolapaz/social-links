import React from 'react'
import avatar from '../assets/images/avatar-jessica.jpeg'
import SocialLink from '../components/SocialLink'
import Attribution from '../components/Attribution'
import data from '../data.json'

export default function Home() {
	const variants = {
		animation: {
			y: -5,
			scale: 1.1,
			backgroundImage: 'linear-gradient(gold, greenyellow)',
			transition: { type: 'spring', stiffness: 300 },
		},
	}

	const linksElem = data.map(link => (
		<SocialLink
			key={link.site}
			site={link.site}
			url={link.url}
			variants={link.site === 'Frontend Mentor' && variants}
			whileHover={link.site === 'Frontend Mentor' ? variants.animation : ''}
			whileFocus={link.site === 'Frontend Mentor' ? variants.animation : ''}
		/>
	))

	return (
		<>
			<main>
				<img
					className='avatar'
					src={avatar}
					alt='Profile picture'
					sizes='176x176'
				/>
				<h1 className='name'>Jessica Randall</h1>
				<p className='location'>London, United Kingdom</p>
				<q className='description'>"Front-end developer and avid reader."</q>
				<h2 className='sr-only'>Social links</h2>
				<nav>
					<ul className='links-list'>{linksElem}</ul>
				</nav>
			</main>

			<footer>
				<Attribution />
			</footer>
		</>
	)
}
