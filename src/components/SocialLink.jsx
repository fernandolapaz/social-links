import React from 'react'
import { motion } from 'framer-motion'

export default function SocialLink(props) {
	return (
		<li>
			<motion.a
				className='link'
				href={props.url}
				variants={props.variants}
				whileHover={props.whileHover}
				whileFocus={props.whileFocus}
			>
				{props.site}
			</motion.a>
		</li>
	)
}
