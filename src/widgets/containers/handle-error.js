import React, { Component } from 'react'
import Error from '../components/error'
class HandleError extends Component {
    state = {
        HandleError: false,
    }
    componentDidCatch(error, info) {
        this.setState({
            HandleError:true,
        })
    }
    render() {
        if (this.state.HandleError) {
            return(
                <Error></Error>
            )
        }
        return this.props.children
    }
}
export default HandleError