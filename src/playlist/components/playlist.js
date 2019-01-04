import React, { Component } from 'react'
import Media from './media'
class Playlist extends Component {
    render() {
        //array con datos extraidos de la api
        const playlist = this.props.data.categories[0].playlist
        console.log(playlist)
        console.log(this.props.data)
        return (
            <div>
                {
                    playlist.map((item) => {
                        return <Media 
                            title={item.title}
                            author={item.author}
                            cover={item.cover} 
                            />
                    })
                }
            </div>
        )
    }
}
export default Playlist
