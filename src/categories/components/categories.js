import React from 'react'
import Category from './category'
import './categories.css'
const Categories = (props) => {
    return(
        <div className="Categories">
            {
                props.categories.map((item) => {
                   return <Category openModal={props.openModal} {...item} key={item.id} />
                })
            }
        </div>
    )
}
export default Categories