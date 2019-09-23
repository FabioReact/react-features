import React from 'react'
import './App.css'
import Routes from './Routes'
import Layout from './hoc/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContext from './context/auth-context'


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			authenticated: false
		}
		this.loginUser = this.loginUser.bind(this)
	}

	loginUser() {
		this.setState((state, props) => ({
			authenticated: !state.authenticated
		}))
	}

	render() {
		return (
			<Router>
				<Layout>
					<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginUser}}>
						<Routes />
					</AuthContext.Provider>
				</Layout>
			</Router>
		)
	}
}

export default App;
