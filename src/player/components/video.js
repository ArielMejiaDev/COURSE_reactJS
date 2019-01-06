import React, { Component } from 'react'
import './video.css'
class Video extends Component {
    //al darle click a los iconos cambia el state pause y ahora habria que validar que valor se envia pero con el componente ya montado
    //para cambiar tambien el video pausarlo si pause es true o darle play si es false
    toggelPlay = () => {
        if (this.props.pause) {
            this.video.play()
        }else {
            this.video.pause()
        }
    }
    componentWillReceiveProps(props) {
        if (props.pause !== this.props.pause) {
            this.toggelPlay()
        }
    }
    //esta funcion es custom pero se llama asi por convencion igual que el caso de handleClick por ejemplo
    setRef = element => this.video = element
    render() {
        return(
            <div className="Video">
                <video 
                    src={this.props.src}
                    autoPlay ={this.props.autoplay}
                    //esta propiedad permite una funcion que obtenga por asi decir el target que en este caso es el tag video
                    ref={this.setRef}
                />
            </div>
        )
    }
}
export default Video