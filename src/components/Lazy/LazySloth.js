import React, { lazy, Suspense} from 'react'

// const SlothComponentWithDelay = lazy(() => import('./Sloth'))

const Loading = () => (<div>Loading component...</div>)

const SlothComponentWithDelay = lazy(() => {
	return Promise.all([
		import('./Sloth'),
		new Promise(resolve => setTimeout(resolve, 2000))
	])
	.then(([moduleExports]) => moduleExports)
});

const LazySlothComponent = () => (
	<Suspense fallback={Loading()}>
		<SlothComponentWithDelay />
	</Suspense>
)

export default LazySlothComponent