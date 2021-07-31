import { useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/modal/Modal.module.css'
import { closeModalAction } from '../redux/actions/uiActions'

const ModalPortal = ({ children }) =>
	ReactDOM.createPortal(children, document.getElementById('modal-root'))

export default function Modal({ isOpen, children }) {
	const dispatch = useDispatch()

	const closeModal = () => dispatch(closeModalAction())

	return (
		<ModalPortal>
			<div
				onClick={closeModal}
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
