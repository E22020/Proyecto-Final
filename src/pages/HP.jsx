import React from 'react';
import './Tienda.css';
import CustomCard from '../components/Cartilla';
function HP (){
    return(
        <div className='Tienda'>
            <div className='Card1'>
            <CustomCard
            title="Banco Mágico Gringotts™: Edición para Coleccionistas"
            text="Descubre la magia de Gringotts™ con el set LEGO Banco Mágico Gringotts™: Edición para Coleccionistas, un modelo detallado que te transporta al corazón del Wizarding World."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt3db77dbc731f5eeb/76417_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/gringotts-wizarding-bank-collectors-edition-76417"
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
            title="Tiendas Mágicas del Callejón Diagon"
            text="Explora las icónicas Tiendas Mágicas del Callejón Diagon con este set LEGO, repleto de detalles encantadores que capturan la magia y el encanto del mundo de Harry Potter."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltdb373d8b91970d84/76444_Box5_v39_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/diagon-alley-wizarding-shops-76444"
            />
            </div>
            <div className='Card4'>
            <CustomCard
            title="Expecto Patronum"
            text="Revive la magia con el set LEGO Expecto Patronum, donde puedes crear tu propio encantamiento y traer a la vida al Patronus de Harry Potter en una escena llena de detalles mágicos."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt3da22d73d34da463/76414_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/expecto-patronum-76414"
            />
            </div>
            <div className='Card5'>
            <CustomCard
            title="Expreso de Hogwarts: Edición para Coleccionistas"
            text="Viaja al mundo mágico con el set LEGO Expreso de Hogwarts: Edición para Coleccionistas, un modelo detallado que captura la magia y la emoción de uno de los viajes más icónicos del Wizarding World."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blta33bab262791624b/76405_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/hogwarts-express-collectors-edition-76405"
            />
            </div>
            <div className='Card6'>
            <CustomCard
            title="Ford Anglia™ Volador"
            text="Vuela con el Ford Anglia™ Volador de LEGO, un modelo encantador que recrea la famosa escena de *Harry Potter* y lleva la magia directamente a tu colección."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt12e51f725bd65a30/76424_Box5_v39.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/flying-ford-anglia-76424"
            />
            </div>
        </div>
    );
}
export default HP