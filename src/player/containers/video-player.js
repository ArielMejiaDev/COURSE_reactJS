import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
class VideoPlayer extends Component {
    state = {
        pause: true,
    }
    togglePlay = ev => {
        this.setState({
            //esto es lo mismo que decir que es lo contrario a la propiedad pause del objeto state
            //asi en una sola funcion va cambiar de true a false constantemente xq cambia al contrario del state actual
            pause: !this.state.pause
        })
    }
    render() {
        return(
            <VideoPlayerLayout>
                <Title 
                    title="Esto es un video chido!"
                />
                <PlayPause 
                    pause={this.state.pause}
                    handleClick={this.togglePlay}
                />
                <Video 
                    autoplay={true}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer