import React from 'react'
import './home-layout.css'
const Layout = (props) => {
    return(
        <section className="Home-layout">
            {props.children}
        </section>
    )
}
export default Layout