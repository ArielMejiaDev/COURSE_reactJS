import React from 'react'
import Media from './media'

// la clase Playlist fue cambiada por un functunalComponent ya que solo se imprime en pantalla no tiene un ciclo de vida
const Playlist = (props) => {
        //array con datos extraidos de la api
        const playlist = props.data.categories[0].playlist
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => <Media {...item} key={item.id} />)
                }
            </div>
        )
}
export default Playlist
