import React from 'react';
import './Tienda.css';
import CustomCard from '../components/Cartilla';
function Marvel (){
    return(
        <div className='Tienda'>
            <div className='Card1'>
            <CustomCard
            title="Gran Batalla de Capitán América: Civil War"
            text="Revive la épica Gran Batalla de Capitán América: Civil War, donde los héroes más poderosos del universo Marvel se enfrentan en una lucha cargada de emoción, lealtades divididas y acción inolvidable. ¿De qué lado estás?"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltd757ab8f36e02c4d/76314_Prod_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/captain-america-civil-war-action-battle-76314"
          />
            </div>
            <div className='Card2'>
            <CustomCard
            title="Deportivo de Iron Man y Black Panther vs. Hulk Rojo"
            text="Iron Man y Black Panther en su deportivo enfrentando al imparable Hulk Rojo. ¡Una batalla épica de velocidad y fuerza!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltb738efd9fea69a30/76310_Box5_v39_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/iron-man-car-black-panther-vs-red-hulk-76310"
          />
            </div>
            <div className='Card3'>
            <CustomCard
            title="Hulkbuster​"
            text="El Hulkbuster entra en acción para detener a Hulk. ¡Una batalla titánica de fuerza y tecnología!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltce3ffc1b5664031e/76210_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/hulkbuster-76210"
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
export default Marvel