import React from 'react';
import './Tienda.css';
import CustomCard from '../components/Cartilla';
function Tienda (){
    return(
        <div className='Tienda'>
            <div className='Card1'>
            <CustomCard
            title="DeLorean de Volver al Futuro"
            text="¡Revive las aventuras de Marty y Doc con este increíble set LEGO!"
            imgSrc="https://www.brickmo.com/media/image/ea/13/72/LEGO_Exklusiv_10300_Die_Zeitmaschine_aus_Zuruck_in_die_Zukunft_10300_LEGO-Exklusiv-Set_LEGO-Online-Shop_BRICKMO_10_600x600@2x.jpg"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/back-to-the-future-time-machine-10300"
          />
            </div>
            <div className='Card2'>
            <CustomCard
            title="Castillo de Hogwarts™"
            text="¡Construye la magia de Hogwarts con este impresionante set LEGO de Harry Potter y vive las aventuras en el castillo más famoso del mundo!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt08668e770aaef16e/71043_alt1.jpg?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/hogwarts-castle-71043"
          />
            </div>
            <div className='Card3'>
            <CustomCard
            title="McLaren P1 42172"
            text="¡Conduce el lujo y la velocidad con el set LEGO del McLaren P1, un coche espectacular lleno de detalles realistas!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt151fb3ff59527911/42172_Box5_v39.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/mclaren-p1-42172"
            />
            </div>
            <div className='Card4'>
            <CustomCard
            title="X-Men: Mansión X"
            text="¡Descubre la Mansion X y únete a los X-Men con este impresionante set LEGO lleno de acción y detalles épicos!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blta20603eefb543d17/76294_Box5_v39.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/x-men-the-x-mansion-76294"
            />
            </div>
            <div className='Card5'>
            <CustomCard
            title="Torre de los Vengadores"
            text="¡Protege el mundo con el increíble set LEGO de la Torre de los Avengers, donde las aventuras heroicas cobran vida y cada detalle te acerca más al universo Marvel!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blta1716ca226f20cab/76269.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/avengers-tower-76269"
            />
            </div>
            <div className='Card6'>
            <CustomCard
            title="LEGO® Marvel: Vengadores Reunidos: Era de Ultrón"
            text="¡Únete a los Avengers y detén a Ultrón con este emocionante set LEGO de La Era de Ultrón!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt898eca8d5ae27642/76291.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-us/product/the-avengers-assemble-age-of-ultron-76291"
            />
            </div>
        </div>
    );
}
export default Tienda