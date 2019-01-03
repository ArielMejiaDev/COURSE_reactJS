//primera manera
//import React from 'react';
//segunda forma desfragmentando para traer unicamente la propiedad y no todo el objeto o clase
import React, {Component} from 'react';
//class Media extends React.Component {

//en vez de traer el objeto y su propiedad unicamente traemos su propiedad    
class Media extends Component {
    render() {
        return (
            <div>
                <div>
                    <img 
                        src="" 
                        alt="" 
                        width={260}
                        height={160}
                        />
                    <h3>¿Por que aprender React? ...</h3>
                </div>
            </div>
        )
    }
}
export default Media;