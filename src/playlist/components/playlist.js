import React from 'react'
import Media from './media'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/full-screen'

// la clase Playlist fue cambiada por un functunalComponent ya que solo se imprime en pantalla no tiene un ciclo de vida
const Playlist = (props) => {
        //array con datos extraidos de la api
        const playlist = props.data.categories[0].playlist
        return (
            <div className="Playlist">
                {/* PLAY BUTTON */}
                <Play                     
                    size={50}
                    color="red"
                />
                {/* PAUSE BUTTON */}
                <Pause 
                    size={50}
                    color="blue"
                />
                {/* VOLUME BUTTON */}
                <Volume 
                    size={50}
                    color="green"
                />
                {/* FULL SCREEN */}
                <FullScreen 
                    size={50}
                    color="yellow"
                />
                {
                    playlist.map((item) => <Media {...item} key={item.id} />)
                }
            </div>
        )
}
export default Playlist
