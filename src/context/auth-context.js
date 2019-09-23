import React from 'react'

// Can be an object, array, string...
const authContext = React.createContext({
	authenticated: false,
	login: () => {}
})
// Usefull for autocompletion

export default authContext