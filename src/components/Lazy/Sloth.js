import React, { Component } from 'react'

export default class Sloth extends Component {
	style = {
		img: {
			width: '300px',
			height: '300px',
			borderRadius: '50%',
			flexGrow: 'initial'
		}
	}

	render() {
		return (
			<div>
				<img src="https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2019/slothsarefar.jpg" alt="Sloth" style={this.style.img}/>
				<p>This component is super lazy...</p>
			</div>
		)
	}
}
