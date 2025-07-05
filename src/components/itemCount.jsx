import React, { useState, useContext } from 'react';
import '../App.css';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
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
        if (stock > 0) {
            onAdd(quantity);
        } else {
            console.log("No se pudo agregar al carrito. Verifica el stock del producto.");
        }
    };

    return (
        <div className='Contador'>
            <div className="Controles">
                <button className='Boton' onClick={decrementar} disabled={quantity <= 1}>
                    -
                </button>
                <span className='Numero'>{quantity}</span>
                <button className='Boton' onClick={incrementar} disabled={quantity >= stock}>
                    +
                </button>
            </div>
            <button className='Boton' onClick={agregarAlCarrito} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
