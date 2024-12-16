import React from 'react';
import './Tienda.css';
import CustomCard from '../components/Cartilla';
function SW (){
    return(
        <div className='Tienda'>
            <div className='Card1'>
            <CustomCard
            title="Crucero de Ataque Clase Venator de la República"
            text="Lucha en las estrellas con el set LEGO Crucero de Ataque Clase Venator, un modelo detallado que refleja la fuerza de la República en *Star Wars*."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt266b40dfb46ff5de/75367_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/venator-class-republic-attack-cruiser-75367"
          />
            </div>
            <div className='Card2'>
            <CustomCard
            title="The Razor Crest™"
            text="Embárcate en una aventura galáctica con el set LEGO The Razor Crest™, el icónico nave de *The Mandalorian*, llena de detalles y acción."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltab08f6a77b84fb10/75331_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/the-razor-crest-75331"
          />
            </div>
            <div className='Card3'>
            <CustomCard
            title="Caza Estelar Ala-X"
            text="Vuela al combate con el set LEGO Caza Estelar Ala-X, un modelo icónico de *Star Wars* que captura la esencia de la rebelión en una detallada nave."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/bltec62b553a047fa14/75355_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/x-wing-starfighter-75355"
            />
            </div>
            <div className='Card4'>
            <CustomCard
            title="Interceptor TIE"
            text="Desata el poder del Imperio con el set LEGO Interceptor TIE, un modelo clásico de *Star Wars* que refleja la velocidad y fuerza de las fuerzas imperiales."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt956aa062c9b5321e/75382_Box5_v39.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/tie-interceptor-75382"
            />
            </div>
            <div className='Card5'>
            <CustomCard
            title="Obi-Wan Kenobi™ y Darth Vader™"
            text="Revive el duelo épico con el set LEGO Obi-Wan Kenobi™ y Darth Vader™, capturando la intensidad de la batalla entre el Jedi y el Sith."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt14a4918587040869/40547_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/obi-wan-kenobi-darth-vader-40547"
            />
            </div>
            <div className='Card6'>
            <CustomCard
            title="Base Rebelde de Yavin 4"
            text="Explora la Base Rebelde de Yavin 4 con el set LEGO, un modelo detallado que captura la esencia de la lucha de la Rebelión en 'Star Wars'."
            imgSrc="https://www.lego.com/cdn/cs/set/assets/blt3453893b909c68a9/75365_alt1.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1"
            buttonOnClick={() => handleButtonClick('DeLorean')}
            Link="https://www.lego.com/es-ar/product/yavin-4-rebel-base-75365"
            />
            </div>
        </div>
    );
}
export default SW