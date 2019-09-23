import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './layout.module.css'

const Layout = (props) => {
	return (
		<div className={styles.layout}>
			<nav>
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/lazy-component">LazyComponent</NavLink></li>
					<li><NavLink to="/change-background">Change Background</NavLink></li>
					<li><NavLink to="/admin">Admin</NavLink></li>
					<li><NavLink to="/dummy">Dummy</NavLink></li>
					<li><NavLink to="/portal">Modal</NavLink></li>
					<li><NavLink to="/exercice/first">Exercice - First</NavLink></li>
				</ul>
			</nav>
			<main>
				{props.children}
			</main>
		</div>
	)
}

export default Layout
