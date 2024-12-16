import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom"
import './Navbar.css'
import Logo from '../assets/Logo.png'


const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)
    return (
    <nav>
        <Link to="/" className="title"><img src={Logo}></img>
           Epic Bricks
        </Link>
        <div className="menu" onClick={() =>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open":""}>
            <li>
                <NavLink to="/Tienda">Tienda</NavLink>
            </li>
            <li>
                <NavLink to="/Categorias">Categorías</NavLink>
            </li>
            <li>
                <NavLink className='About' to="/About">Acerca de <br></br>Nosotros</NavLink>
            </li>
        </ul>
    </nav>
    );
}
export default Navbar;