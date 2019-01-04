//primera manera
//import React from 'react';
//segunda forma desfragmentando para traer unicamente la propiedad y no todo el objeto o clase
import React, {Component} from 'react';
//importamos un archivo css
import './media.css';

//class Media extends React.Component {

//en vez de traer el objeto y su propiedad unicamente traemos su propiedad    
class Media extends Component {
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
            <div>
                <div className="container">
                {/* <div  style={styles.container}> */}
                    <img 
                        src="images/cover/bitcoin.png"
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