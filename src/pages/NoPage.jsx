import React from 'react'
import { Link } from 'react-router-dom'

const style = {
	backgroundColor: '#212121',
	borderRadius: '0.5rem',
	padding: '2rem',
	fontSize: '1.5rem',
	color: 'white',
}

export default function NoPage() {
	return (
		<div style={style}>
			<span aria-hidden='true'>🤔</span>
			<h1>This page doesn't exist.</h1>
			<p>
				Back <Link to='/'>Home</Link>
			</p>
		</div>
	)
}
