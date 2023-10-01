import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext"



const Cart = () => {
    const { cartList, removeProducto, limpiarCarrito } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        removeProducto(id);
    };

    const handleClearCart = () => {
        limpiarCarrito();
    };

    return (
        <div>

            
            
            {cartList.length > 0 ? (
                <>
                    <ul>
                        {cartList.map((producto) => (
                            <li key={producto.id}>
                                {producto.nombre} - Cantidad: {producto.quantity} - Precio por unidad: ${producto.precio} - Total: ${producto.precio * producto.quantity}
                                <button onClick={() => handleRemoveItem(producto.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <p>Precio total: ${cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0)}</p>
                    <button onClick={handleClearCart}>Vaciar Carrito</button>
                </>
            ) : (
                <div>
                    <h1 className="titulo-4">No hay ítems en el carrito.</h1>
                    <Link to="/" className="Link-2">Ir al catálogo</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
