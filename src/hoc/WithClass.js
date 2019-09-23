import React from 'react'

export const withClass = (MyComponent, className) => props => (
	(
		<>
			<MyComponent className={className} {...props} />
		</>
	)
)
