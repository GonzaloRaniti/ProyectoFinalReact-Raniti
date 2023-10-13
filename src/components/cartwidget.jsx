import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import imagen1 from '/carrito-2.png'

function CartWidget() {
    const { calcItemsQty, cartList } = useContext(CartContext);
    const itemsQty = calcItemsQty();

    return (
        <div className="cart-icon">
            {cartList && (
                <>
                    <Link to='/Cart'>
                        <img width={30} src={imagen1} alt="Carrito" />
                    </Link>
                    <span className="cart-counter">{Number.isNaN(itemsQty) ? 0 : itemsQty}</span>
                </>
            )}
        </div>
    );
}

export default CartWidget;
