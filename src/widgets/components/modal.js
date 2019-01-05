import React from 'react'
import './modal.css'
const Modal = (props) => {
    return(
        <div className="Modal">
            <p>esto es un modal</p>
            {props.children}
            <button onClick={props.closeModal}>Cerrar</button>
        </div>
    )
}
export default Modal