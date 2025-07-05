// Cart.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, removerProducto, limpiarCarrito, calcItemsQty } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        removerProducto(id);
    };

    const total = cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0);

    return (
        <div className="cart-container">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Tu Carrito</h1>
            
            {!cartList.length ? (
                <div className="empty-cart">
                    <h2 className="empty-cart-title">¡Tu carrito está vacío!</h2>
                    <p style={{ marginBottom: '2rem', color: '#666' }}>Agrega algunos productos para comenzar a comprar.</p>
                    <Link to="/" className="empty-cart-link">
                        Ir al Catálogo
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-list">
                        {cartList.map((producto) => (
                            <div key={producto.id} className="cart-item">
                                <img src={producto.image} alt={producto.titulo} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{producto.titulo}</h3>
                                    <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                                        <strong>Cantidad:</strong> {producto.quantity}
                                    </p>
                                    <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>
                                        <strong>Precio por unidad:</strong> ${producto.precio?.toLocaleString()}
                                    </p>
                                    <p style={{ color: '#333', fontWeight: '700', fontSize: '1.1rem' }}>
                                        <strong>Subtotal:</strong> ${(producto.precio * producto.quantity)?.toLocaleString()}
                                    </p>
                                </div>
                                <button className="cart-item-remove" onClick={() => handleRemoveItem(producto.id)}>
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <button className="cart-clear-button" onClick={limpiarCarrito}>
                            Vaciar Carrito
                        </button>
                    </div>
                    
                    <div className="cart-total">
                        <strong>Total: ${total?.toLocaleString()}</strong>
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/checkout" className="cart-finalizar-compra">
                            Finalizar Compra
                        </Link>
                        <br />
                        <Link to="/" style={{ 
                            display: 'inline-block', 
                            marginTop: '1rem',
                            color: '#667eea',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>
                            ← Seguir Comprando
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
