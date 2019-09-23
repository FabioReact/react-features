import React, { useState, useEffect } from 'react'

const gradientArray = [
	'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
	'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
	'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)',
	'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)'
]

const initialStyle = {
	gradient: 0,
	backgroundImage: gradientArray[0]
}

const ChangeBackground = () => {

	console.log('Change Background Mounted')

	const [styles, setstyles] = useState(initialStyle)

	useEffect(() => {
			console.log('useEffect Mounted')
			return () => (console.log('useEffect Unmounted'))
	}, [])

	useEffect(() => {
		console.log('useEffect Updated')
		return () => (console.log('useEffect Update Unmounted'))
	}, [styles.gradient])

	const changeColor = (gradientNumber) => {
		const nextGradient = (gradientNumber + 1) % gradientArray.length
		setstyles({
			...initialStyle,
			backgroundImage: gradientArray[nextGradient],
			gradient: nextGradient
		})
	}

	return (
		<div style={{backgroundImage: styles.backgroundImage}}>
			<p>Gradient N°{styles.gradient}</p>
			<button onClick={() => changeColor(styles.gradient)}>Change Background</button>
		</div>
	)
}

export default ChangeBackground