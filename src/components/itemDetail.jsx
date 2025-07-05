import React, { useState } from 'react';
import '../App.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addToCart } = useCart();

    // Normalizar la ruta de la imagen
    const imageUrl = producto.image?.startsWith('./') ? producto.image.replace('./', '/') : producto.image;

    const onAdd = (quantity) => {
        addToCart(producto, quantity);
        setQuantityAdded(quantity);
    };

    return (
        <div className='card' style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                    <img src={imageUrl} alt={producto.titulo} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <h1>{producto.titulo}</h1>
                    <p className='precio'>$ {producto.precio?.toLocaleString()}</p>
                    <p><strong>Categoría:</strong> {producto.categoria}</p>
                    <p><strong>Stock:</strong> {producto.stock} unidades</p>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>{producto.descripcion}</p>

                    {quantityAdded > 0 ? (
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to='/cart' className='card a' style={{ display: 'inline-block', marginBottom: '1rem' }}>
                                Terminar Compra ({quantityAdded} {quantityAdded === 1 ? 'item' : 'items'})
                            </Link>
                            <br />
                            <Link to='/' className='card a' style={{ display: 'inline-block' }}>
                                Seguir Comprando
                            </Link>
                        </div>
                    ) : (
                        <ItemCount stock={producto.stock || 5} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
