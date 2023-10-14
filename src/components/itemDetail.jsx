import React, { useState } from 'react';
import '../app.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addToCart } = useCart();

    const onAdd = (quantity) => {
        addToCart(producto, quantity);
        setQuantityAdded(quantity);
    };

    return (
        <div className='card'>
            <h1>{producto.titulo}</h1>
            <p>{producto.nombre}</p>
            <p>Precio $ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <img src={producto.image} alt='imagen' className='img' />

            {quantityAdded > 0 ? (
                <Link to='/cart' className='terminarCompra'>
                    Terminar Compra ({quantityAdded} {quantityAdded === 1 ? 'item' : 'items'})
                </Link>
            ) : (
                <ItemCount stock={5} onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
