import React from "react";
import './Footer.css';

function Footer () {
    return(
        <section className="Footer">
            <hr className="footer-separator"/>
            <section className="info">
                <section className="left">
                    <section className="info-name">
                        Software Engineer Elias Emanuel Callisaya Ruiz
                    </section>
                    <section className="info-returns">
                        Returns Policy 
                        <br/>
                        Delivery
                    </section>
                </section>
                <section className="center">
                    <section className="info-email">
                        ShoppingLegosEpicBElias@gmail.com
                    </section>
                    <section className="info-terms">
                        Terminos y Condiciones
                        <br/>
                        Copyright
                    </section>
                </section>
                <section className="right">
                    <section className="info-number">
                        14290286
                    </section>
                    <section className="info-contact">
                        Nombre: Elias Emanuel Callisaya Ruiz <br/>
                        Fecha de Creacion: 11/12/2024
                        <br/>
                        Contactanos
                    </section>
                </section>
            </section>
            <hr className="footer-separator"/>
        </section>
    );
}
export default Footer;