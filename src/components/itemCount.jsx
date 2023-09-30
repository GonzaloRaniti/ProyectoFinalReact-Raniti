import React, { useState, useContext } from 'react';
import '../app.css';
import { CartContext } from './CartContext';


const ItemCount = ({ stock, initial, producto }) => {
    const [quantity, setQuantity] = useState(initial);
    const { addToCart } = useContext(CartContext);

    const incrementar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrementar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const agregarAlCarrito = () => {
        if (producto && producto.id) {
            addToCart({
                id: producto.id,
                nombre: producto.titulo,
                precio: producto.precio,
                stock: producto.stock
            }, quantity);
        }
    };

    return (
        <div className='Contador'>
            <div className="Controles">
                <button className='Boton' onClick={decrementar}>-</button>
                <h3 className='Numero'>{quantity}</h3>
                <button className='Boton' onClick={incrementar}>+</button>
            </div>
            <button className='Boton' onClick={agregarAlCarrito} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;