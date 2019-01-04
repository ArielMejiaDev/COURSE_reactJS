import React from 'react'
import Icon from './icon'
const Play = (props) => {
    //composicion importa el functunality component Icon que funcionara como un wrapper y todo lo que sea hijo de este se enviara como 
    //props.children a la funcion Icon en icon.js con el ...props
    return (
        <Icon {...props} >
            <path d="M6 4l20 12-20 12z"></path>
        </Icon>
    )
}
export default Play