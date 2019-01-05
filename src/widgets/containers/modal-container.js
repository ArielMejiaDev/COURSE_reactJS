import React, { Component } from 'react'
import { createPortal } from 'react-dom'
class ModalContainer extends Component {
    render() {
        //usamos una funcion nativa de react dom que se llama create portal, tiene dos params
        //que va renderizar y donde
        return createPortal(this.props.children, document.getElementById('modal-container'))
    }
}
export default ModalContainer