import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';
import CartWidget from './Cartwidget';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink to="/">
                    <img width={100} src="/logo-2.png" alt="Logo" />
                </NavLink>

                <ul className="nav-list">
                    <NavLink to="/category/camisas" className="nav-link">Camisas</NavLink>
                    <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
                    <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
                    <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                </ul>

                <CartWidget />
            </nav>

            <h2 className="parrafo">CG INDUMENTARIA</h2>
        </>
    );
}

export default Navbar;
