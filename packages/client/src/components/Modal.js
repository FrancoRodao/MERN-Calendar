import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/modal/Modal.module.css'

const ModalPortal = ({ children }) =>
	ReactDOM.createPortal(children, document.getElementById('modal-root'))

export default function Modal({ isOpen, children }) {
	return (
		<ModalPortal>
			<div
				className={`${styles.modal__container} opacity-${isOpen ? '1' : '0'}`}
			>
				<div className={`${styles.modal__dialog}`}>{children}</div>
			</div>
		</ModalPortal>
	)
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.arrayOf(PropTypes.element)
}
