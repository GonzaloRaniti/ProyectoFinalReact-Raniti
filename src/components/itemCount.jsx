import React, { useState, useContext } from 'react';
import '../app.css';
import { CartContext } from './CartContext';
import productos from '../../productos.json';

const ItemCount = ({ stock, initial, onAdd }) => {
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
        if (stock > 0) {
            const productoActual = productos.find(producto => producto.id); 

            addToCart({
                id: productoActual.id,
                nombre: productoActual.titulo,
                precio: productoActual.precio,
                imagen: productoActual.image,
                stock: productoActual.stock
            }, quantity);
        } else {
            console.log("No se pudo agregar al carrito. Verifica el stock del producto.");
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
