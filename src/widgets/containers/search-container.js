import React, { Component } from 'react'
import Search from '../components/search'
class SearchContainer extends Component {
    //si quiero manejar un valor por defecto como es un estado
    state = {
        value: 'HTML5',
    }
    handleSubmit = ev => {
        ev.preventDefault()
        console.log(this.input.value, 'submit')
    }
    setInputRef = element => {
        this.input = element
    }


    handleChange = ev => {
        this.setState({
            //o podria ir this.input que ya esta seteado pero para aprender a usar ambos metodos
            value: ev.target.value.replace(' ', '-')
        })
    }
    render() {
        return(
            <Search 
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                value={this.state.value}
            />
        )
    }
}
export default SearchContainer