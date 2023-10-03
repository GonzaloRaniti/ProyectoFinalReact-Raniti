import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import productos from '../../productos.json';

const Cart = () => {
    const { cartList, removerProducto, limpiarCarrito } = useContext(CartContext);
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [codigoEnvio, setCodigoEnvio] = useState(null);

    const handleRemoveItem = (id) => {
        removerProducto(id);
    };

    const handleClearCart = () => {

        const nuevoCodigoEnvio = generarCodigoEnvioUnico();


        setCompraFinalizada(true);
        setCodigoEnvio(nuevoCodigoEnvio);


        limpiarCarrito();
    };

    const generarCodigoEnvioUnico = () => {

        return "XHGJDYUEHD458DSS6";
    };

    return (
        <div className="cart-container">
            {compraFinalizada ? (
                <div className="compra-finalizada">
                    <h1>¡Muchas gracias por su compra!</h1>
                    <h2>Deja tus datos en la sección contactos!</h2>
                    <p>Su código de envío es: {codigoEnvio}</p>
                    
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
                        <button className="cart-clear-button" onClick={handleClearCart}>
                            Vaciar Carrito
                        </button>

                    </div>
                    <>
                        <button className="cart-finalizar-compra" onClick={handleClearCart}>
                            Finalizar Compra
                        </button>
                    </>
                    <p className="cart-total">Precio total: ${cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0)}</p>

                    <Link to="/" className="boton-5">Ir al catalogo</Link>
                </>

                
            )}
        </div>
    );
};

export default Cart;
