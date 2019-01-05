import React from 'react'
import Playlist from '../../playlist/components/playlist';
import './category.css'
const Category = (props) => {
    return(
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <p className="Category-title">{props.title}</p>
            {/* {
                props.playlist.map((item) => {
                    <Playlist {...item} />
                })
            } */}
            <Playlist openModal={props.openModal} playlist={props.playlist} />
        </div>
    )
}
export default Category