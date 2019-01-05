import React, { Component } from 'react'
import Search from '../components/search'
class SearchContainer extends Component {
    handleSubmit = ev => {
        ev.preventDefault()
        console.log('submit')
    }
    render() {
        return(
            <Search 
                handleSubmit={this.handleSubmit}
            />
        )
    }
}
export default SearchContainer