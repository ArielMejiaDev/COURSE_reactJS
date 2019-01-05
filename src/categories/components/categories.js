import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search-container'
const Categories = (props) => {
    return(
        <div className="Categories">
        <SearchContainer/>
            {
                props.categories.map((item) => {
                   return <Category openModal={props.openModal} {...item} key={item.id} />
                })
            }
        </div>
    )
}
export default Categories