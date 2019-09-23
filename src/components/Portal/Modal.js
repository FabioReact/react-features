import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
	backgroundColor: '#FFFFFF',
	position: 'absolute',
	padding: '16px',
	transform: 'translate(-50%, -50%)',
	top: '50%',
	left: '50%'
}

const Modal = (props) => {
	const Content = (closeModal) => (
		<div>
			<div style={styles}>
				<h5>Modal Title</h5>
				<p>Some info about this modal...</p>
				<button onClick={closeModal}>Close Modal</button>
			</div>
		</div>
	)

	const domNode = document.getElementById('modal')

	return ReactDOM.createPortal(Content(props.closeModal), domNode)
}

const CallModal = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<div>
			<button onClick={() => setOpen(true)}>Open Modal</button>
			{open && <Modal closeModal={() => setOpen(false)} />}
		</div>
	)
}

export default CallModal