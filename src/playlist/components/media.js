//primera manera
//import React from 'react';
//segunda forma desfragmentando para traer unicamente la propiedad y no todo el objeto o clase
import React, {Component} from 'react';
//importamos proptypes
import PropTypes from 'prop-types';
//importamos un archivo css
import './media.css';

//class Media extends React.Component {

//en vez de traer el objeto y su propiedad unicamente traemos su propiedad    
class Media extends Component {
    //asi seria en ecmascript 6 ya que hay que enlazar el contexto a la clase el evento onclick llama al browser y el this pasa a ser window
    //para evitar esto y que imprima alguna propiedad del objeto es necesario enlazar la funcion al contexto de la clase asi this seria la clase Media
    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }
    //funcion ecma6
    // handleClick(ev){
    //     console.log(this.props.title)
    // }
    //ecma 6 stage-2
    handleClick = (event) => {
        console.log(this.props.title)
    }
    render() {
        // const styles = {
        //     container: {
        //         color: '#44546b',
        //         cursor: 'pointer',
        //         marginRight: 15,
        //         display: 'inline-block',
        //         verticalAlign: 'top',
        //         width: 260,
        //         border: '1px solid red'
        //     }
        // }
        return (
            <div  className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                {/* <div  style={styles.container}> */}
                    <img 
                        src={this.props.image}
                        alt="" 
                        width={260}
                        height={160}
                        />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                    <p className="Media-category">{this.props.category}</p>
                </div>
            </div>
        )
    }
}
//nueva propiedad propTypes en la clase Media
Media.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.oneOf(['css', 'javascript']).isRequired
    //PropTypes puede tener propiedades de tipo boolean, number, array, object, func de funcion
}
export default Media;