import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0
    }
    togglePlay = ev => {
        this.setState({
            //esto es lo mismo que decir que es lo contrario a la propiedad pause del objeto state
            //asi en una sola funcion va cambiar de true a false constantemente xq cambia al contrario del state actual
            pause: !this.state.pause
        })
    }
    //cuando termina de renderizar el componente este evaluara la propiedad autoplay del objeto props
    //y va a setear true o false si lo que esta en parentesis se cumple o no 
    //con ello por medio de el container home se envia la propiedad autoplay y en base a la evaluacion de esta se setea un valor u otro
    //a la propiedad pause del state realizando cambios dinamicos en el if ternario dentro del metodo render
    //al igual que el metodo togglePlay
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
        //esto es lo mismo que en video el metodo setRef pero no se puede usar el mismo xq ese toma una propiedad ref para obtener que elemento
        //queremos obtener pero en este caso eso no se puede hacer porque no estamos en el scope del video.js
        //aqui se envia por parametro desde el padre inmediato que seria este archivo, por lo cual ev.target es la forma de obtener el elemento
        //al que le hacen click o lo que sea que se quiera capturar
    }
    render() {
        return(
            <VideoPlayerLayout>
                <Title 
                    title="Esto es un video chido!"
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                    />
                </Controls>
                <Video 
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    autoplay={this.props.autoplay}
                    //no se envia props.pause ya que si no se quedaria fijo con el valor que inicia en el state al principio 
                    //de la declaracion del objeto, por ende al cambiar con el metodo setState NO SE DEBE SEGUIR UTILIZANDO props.pause
                    //sino state.pause, asi el valor que se envia al componente Video tambien cambia dinamicamente
                    pause={this.state.pause}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer