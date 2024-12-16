import React from 'react';
import './Tienda.css';
import CustomCard from '../components/Cartilla';
function Technic (){
    return(
        <div className='Tienda'>
            <div className='Card1'>
            <CustomCard
            title="Ford GT 2022"
            text="Conquista la pista con el set LEGO Ford GT 2022, un modelo impresionante que combina velocidad, diseño y detalles realistas."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt53c9261e7c30fd02/42154_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/2022-ford-gt-42154"
          />
            </div>
            <div className='Card2'>
            <CustomCard
            title="Fast and Furious Toyota Supra MK4"
            text="Revive la emoción de Fast & Furious con el set LEGO Toyota Supra MK4, un modelo lleno de detalles y adrenalina, ¡perfecto para los fanáticos de la velocidad!"
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt51526391ad49304b/42204_Box5_v39.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/fast-and-furious-toyota-supra-mk4-42204"
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
            text="Domina las carreteras con el set LEGO Ducati Panigale V4 S, un modelo impresionante que captura la esencia de la velocidad y el diseño italiano."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt0c9d38a892b2d6d0/42202_Box5_v39_en-gb.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/ducati-panigale-v4-s-motorcycle-42202"
            />
            </div>
            <div className='Card5'>
            <CustomCard
            title="Bugatti Bolide Agile Blue"
            text="Vive la emoción de la velocidad con el set LEGO Bugatti Bolide Agile Blue, un modelo espectacular que refleja la potencia y el lujo de este superdeportivo único."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt5e3f459936b4eb34/42162_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/bugatti-bolide-agile-blue-42162"
            />
            </div>
            <div className='Card6'>
            <CustomCard
            title="PEUGEOT 9X8 24H Le Mans Hybrid Hypercar"
            text="Siente la adrenalina de las 24 Horas de Le Mans con el set LEGO PEUGEOT 9X8 Hybrid Hypercar, un modelo innovador que combina tecnología avanzada y diseño futurista."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltee733e15dbb5a62f/42156_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/peugeot-9x8-24h-le-mans-hybrid-hypercar-42156"
            />
            </div>
        </div>
    );
}
export default Technic