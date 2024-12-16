import React from 'react';
import CardM from '../components/Cartillaimg';
import './Categorias.css'
import {Link} from 'react-router-dom'

function Categorias (){
    return(
        <div className='Categorias'>
            <div className='Cat'>
                <Link to="/Marvel"><CardM
                title="LEGO Marvel"
                img="https://cdn.shopify.com/s/files/1/0085/4147/0800/files/lego-banner-marvel-avengers.jpg?v=1620599579"
                info=""
                /></Link>
            </div>
            <div className='Cat'>
            <Link to="/Technic"><CardM
                title="LEGO TECHNIC"
                img="https://cdn.shopify.com/s/files/1/0085/4147/0800/files/lego-banner-technic.jpg?v=1620599952"
                info=""
                />
                </Link>
            </div>
            <div className='Cat'>
            <Link to="/HP"><CardM
                title="LEGO Harry Potter"
                img="https://www.lego.com/cdn/cs/set/assets/bltdef8f5e2c931c423/76409_Hero4_Standard_Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1"
                info=""
                />
                </Link>
            </div>
            <div className='Cat'>
            <Link to="/SW"><CardM
                title="Star Wars"
                img="https://cdn.falconbricks.com/images/themes/star-wars-banner.jpg"
                info=""
                />
            </Link>
            </div>
        </div>
    );
}
export default Categorias