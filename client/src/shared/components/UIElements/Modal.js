import React from 'react'
import ReactDOM from "react-dom"

import "./Modal.css"

const ModalOverlay = (props) => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <div className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
                <form onSubmit = {props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}>
                    <div className={`modal__content ${props.contentClass}`}>
                        {props.children}
                    </div>
                    <footer className = {`modal__footer ${props.footerClass}`}>
                        {props.footer}
                    </footer>
                </form>
            </div>
        </div>
    )
    return (
        ReactDOM.createPortal(content, document.getElementById("modal-hook"))
    )
}

const Modal = () => {
    return (
        <div>
            
        </div>
    )
}

export default Modal
