import React from 'react'
const Icon = (props) => {
    const {size, color} = props
    return(
        <svg
            width={size}
            height={size}
            fill={color}
        >
            {props.children}
        </svg>
    )
}
export default Icon