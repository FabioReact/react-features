import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LazySloth from './components/Lazy/LazySloth'
import CallModal from './components/Portal/Modal'
import Admin from './components/UseContext/Admin'
import ChangeBackground from './components/UseState/ChangeBackground'
import First from './components/Exercice/First'

const Routes = () => (
	<Switch>
		<Route path="/" exact component={() => (<h1>Home</h1>)}/>
		<Route path="/lazy-component" component={LazySloth}/>
		<Route path="/change-background" component={ChangeBackground}/>
		<Route path="/dummy" component={() => (<h1>Dummy Road</h1>)}/>
		<Route path="/admin" component={Admin}/>
		<Route path="/portal" component={CallModal}/>
		<Route path="/exercice/first" component={First}/>
	</Switch>
)

export default Routes