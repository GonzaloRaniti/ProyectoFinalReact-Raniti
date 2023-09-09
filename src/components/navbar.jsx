import React, { useState } from 'react';
import '../app.css';
import CartWidget from './cartwidget'; 
import { Link } from 'react-router-dom';


function Navbar() {
    

    return (
        <nav className="navbar">
            <Link to="/">
            <img width={100} src="/logo-1.png" alt="Logo" />
            </Link>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        <CartWidget />

        </nav>
    );
}

export default Navbar;


