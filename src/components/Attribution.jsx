import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Attribution() {
	const [show, setShow] = React.useState(false)

	const handleToggle = () => {
		setShow(prevShow => !prevShow)
	}

	// Styles
	const box = {
		position: 'fixed',
		bottom: '0.5rem',
		right: show ? '0.5rem' : '-14rem',
		transition: '0.3s',
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
		padding: '1rem',
		color: '#fff',
		backgroundColor: show ? 'rgba(50, 50, 50, 0.75)' : 'transparent',
		backdropFilter: show ? 'blur(0.15rem)' : 'none',
		borderRadius: '0.5rem',
	}

	const btn = {
		display: 'grid',
		placeContent: 'center',
		width: '3rem',
		height: '3rem',
		backgroundColor: show ? 'transparent' : '#99a',
		borderRadius: '50% 0 0 50%',
		rotate: show ? '180deg' : '0deg',
		order: show ? '1' : '0',
	}

	const variants = {
		animation: {
			translate: '-0.25rem',
			transition: { type: 'spring', stiffness: 300 },
		},
	}

	const arrow = {
		color: 'fff',
		width: '2rem',
	}

	const attribution = {
		fontFamily: 'sans-serif',
		fontSize: '14px',
		textAlign: 'center',
		lineHeight: '1.5',
		visibility: show ? 'visible' : 'hidden',
	}

	const link = {
		color: 'skyblue',
	}

	return (
		<div style={box}>
			<motion.button
				type='button'
				className='btn'
				title={!show ? 'Show attribution' : 'Hide attribution'}
				aria-expanded={show ? 'true' : 'false'}
				onClick={handleToggle}
				style={btn}
				variants={variants}
				whileHover='animation'
				whileFocus='animation'
			>
				<FaAngleLeft
					style={arrow}
					aria-hidden='true'
				/>
			</motion.button>
			<p style={attribution}>
				Challenge by{' '}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					style={link}
				>
					Frontend Mentor
				</a>
				.
				<br />
				Coded by{' '}
				<a
					href='https://www.frontendmentor.io/profile/fernandolapaz'
					title='Frontend Mentor Profile'
					style={link}
				>
					Fernando
				</a>
				.
			</p>
		</div>
	)
}
