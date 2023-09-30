import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import imagen1 from '/carrito-2.png'


function CartWidget() {
    const { calcItemsQty, cartList } = useContext(CartContext);

    

    return (
        <div className="cart-icon">
            {cartList && (
                <>
                    
                    <img width={30} src={ imagen1 }/>
                    <span className="cart-counter">{calcItemsQty()}</span>
                </>
            )}
        </div>
    )
}

export default CartWidget;