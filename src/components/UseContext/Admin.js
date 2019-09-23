import React from 'react'
import AuthContext from '../../context/auth-context'

class LogIn extends React.Component {
	static contextType = AuthContext
	render() {
		return (
			<div>
				<p>Accès restreint</p>
				<button onClick={this.context.login}>Se connecter</button>
			</div>
		)
	}
}

// const LogIn = () => {
// 	const authContext = React.useContext(AuthContext)
// 	return (
// 		<div>
// 			<p>Accès restreint</p>
// 			<button onClick={authContext.login}>Se connecter</button>
// 		</div>
// 	)
// }

// const LogIn = () => {
// 	return (
// 		<div>
// 			<p>Accès restreint</p>
// 			<AuthContext.Consumer>
// 				{(context) => (<button onClick={context.login}>Se connecter</button>)}
// 			</AuthContext.Consumer>
// 		</div>
// 	)
// }

export default () => {
	return (
		<>
			<AuthContext.Consumer>
				{
					(context) => context.authenticated ? <p>Bienvenue Admin!</p> : <LogIn />
				}
			</AuthContext.Consumer>
		</>
	)
}
