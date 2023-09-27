import React, { useState } from 'react';
import '../app.css';

function CartWidget() {


    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="cart-icon">
            <img width={30} src="/carrito-2.png" alt='carrito' />
            <span className="cart-counter">{cartCount}</span>
        </div>
    )

}

export default CartWidget;