// Cart.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, removerProducto, limpiarCarrito, calcItemsQty } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        removerProducto(id);
    };

    return (
        <div className="cart-container">
            {!cartList.length ? (
                <div className="compra-finalizada">
                    <h1>¡Tu carrito está vacío!</h1>
                    <Link to="/" className="boton-5">
                        Ir al comprar
                    </Link>
                </div>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartList.map((producto) => (
                            <li key={producto.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={producto.image} alt={producto.titulo} className="cart-item-image" />
                                    <span className="cart-item-name">{producto.titulo}</span>
                                    <span className="cart-item-quantity">Cantidad: {producto.quantity}</span>
                                    <span className="cart-item-price">Precio por unidad: ${producto.precio}</span>
                                    <span className="cart-item-total">Total: ${producto.precio * producto.quantity}</span>
                                </div>
                                <button className="cart-item-remove" onClick={() => handleRemoveItem(producto.id)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-buttons">
                        <button className="cart-clear-button" onClick={limpiarCarrito}>
                            Vaciar Carrito
                        </button>
                    </div>
                    <p className="cart-total">Precio total: ${cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0)}</p>
                    <Link to="/checkout" className="cart-finalizar-compra">
                        Finalizar Compra
                    </Link>
                    <Link to="/" className="boton-5">
                        Ir al catálogo
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;
