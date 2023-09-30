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
            <h2>Carrito de Compras</h2>
            
            {cartList.length > 0 ? (
                <>
                    <ul>
                        {cartList.map((item) => (
                            <li key={item.id}>
                                {item.nombre} - Cantidad: {item.quantity} - Precio por unidad: ${item.precio} - Total: ${item.precio * item.quantity}
                                <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <p>Precio total: ${cartList.reduce((total, item) => total + item.precio * item.quantity, 0)}</p>
                    <button onClick={handleClearCart}>Vaciar Carrito</button>
                </>
            ) : (
                <div>
                    <p>No hay ítems en el carrito.</p>
                    <Link to="/">Ir al catálogo</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
