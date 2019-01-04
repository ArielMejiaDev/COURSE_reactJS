// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
//podemos desfragmentar el objeto y unicamente traer el metodo render del objeto ReactDom
import {render} from 'react-dom';
//import ReactDom from 'react-dom';
// import  Media from './playlist/components/media';
//importando el componente playlist
import Playlist from './playlist/components/playlist'
//importando los datos
import data from './api.json';

const app = document.getElementById('app')
// const textLabel = <h1>Hola Mundo</h1>

//forma anterior importando todo el objeto
//ReactDom.render(<Media/>, app)

//usando el metodo render directamente asi como lo importamos desfragmentado
// render(<Media 
//     title="¿Que es responsive design?" 
//     author="Ariel Salvador"
//     image="images/cover/bitcoin.png"
//     category="css"
//      />, app)

render(<Playlist
        data={data}
        />, app)