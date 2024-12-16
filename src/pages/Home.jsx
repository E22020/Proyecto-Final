import React from 'react';
import Carrusel from '../components/Carrusel';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SaludoL from '../assets/SaludoL.png'
import SaludoLI from '../assets/SaludoLI.png'
function Home (){
    return(
        <div className='Home'>
            <div className='Tituloh'>
                <h1 className="chewy-font">Juguetes más comprados!</h1>
            </div>
            <div className='Carrusel'>
                <Carrusel/>
            </div>
            <div className='Parrafo'>
                <h1 className="chewy-font2">Bienvenidos a Epic Bricks</h1>
            </div>
            <div className='Mont'>
                <p>
                ¡Bienvenidos a *Epic Bricks*! Aquí encontrarás un mundo lleno de imaginación y diversión diseñado para inspirar a los pequeños creadores. Nuestros juguetes están pensados para transformar ideas en aventuras, para construir sueños pieza por pieza y para expandir la creatividad sin límites. Creemos que cada niño tiene un constructor, un artista y un inventor dentro de sí, y estamos emocionados de ser parte de su viaje hacia mundos extraordinarios. ¡Descubre nuestra colección y haz que cada juego sea una nueva historia que contar!
                </p>
            </div>
            <div>
                <img className='img1' src={SaludoLI} align="right"></img>
            </div>
            <div>
                <img className='img2' src={SaludoL} align="left"></img>
            </div>
        </div>
    );
}
export default Home