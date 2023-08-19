import React, { useState } from 'react';
import '../app.css';

function Navbar() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <nav className="navbar">
            <div className="titulo">
                <h1>CG INDUMENTARIA</h1>
            </div>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div className="cart-icon">
                🛒 <span className="cart-counter">{cartCount}</span>
            </div> 
        </nav>
    );
}

export default Navbar;


