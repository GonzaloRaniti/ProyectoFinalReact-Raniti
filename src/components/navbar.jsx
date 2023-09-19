import React, { useState } from 'react';
import '../app.css';
import CartWidget from './cartwidget';
import { Link } from 'react-router-dom';


function Navbar() {


    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <img width={100} src="/logo-1.png" alt="Logo" />
                </Link>

                <ul className="nav-list">
                    <Link to="/category/camisas" className="nav-link">Camisas</Link>
                    <Link to="/category/pantalones" className="nav-link">Pantalones</Link>
                    <Link to="/category/remeras" className="nav-link">Remeras</Link>
                    <Link to="/contacto" className="nav-link">Contacto</Link>
                </ul>
                <CartWidget />

            </nav>
            <h2 className="parrafo">CG INDUMENTARIA</h2>
        </>
    );
}

export default Navbar;


