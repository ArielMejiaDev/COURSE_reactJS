import React from 'react'
import Playlist from '../../playlist/components/playlist';
const Category = (props) => {
    return(
        <div>
            <p>{props.description}</p>
            <p>{props.title}</p>
            {/* {
                props.playlist.map((item) => {
                    <Playlist {...item} />
                })
            } */}
            <Playlist playlist={props.playlist} />
        </div>
    )
}
export default Category