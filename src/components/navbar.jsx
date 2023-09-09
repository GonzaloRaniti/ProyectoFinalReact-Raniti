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
                <li><Link to="/camisas" className="nav-link">Camisas</Link></li>
                <li><Link to="/pantalones" className="nav-link">Pantalones</Link></li>
                <li><Link to="/remeras" className="nav-link">Remeras</Link></li>
                <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
            </ul>
            <CartWidget />

        </nav>
    );
}

export default Navbar;


