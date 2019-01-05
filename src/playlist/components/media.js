//primera manera
//import React from 'react';
//segunda forma desfragmentando para traer unicamente la propiedad y no todo el objeto o clase
import React, {PureComponent} from 'react';
//importamos proptypes
import PropTypes from 'prop-types';
//importamos un archivo css
import './media.css';
//en vez de traer el objeto y su propiedad unicamente traemos su propiedad    
class Media extends PureComponent {
    render() {
        return (
            <div  className="Media" onClick={this.props.openModal}>
                <div className="Media-cover">
                    <img 
                        src={this.props.cover}
                        alt="" 
                        width={230}
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
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    //PropTypes puede tener propiedades de tipo boolean, number, array, object, func de funcion
}
export default Media;