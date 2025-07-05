import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const { cartList, limpiarCarrito } = useContext(CartContext);
    const total = cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0)
    
    function crearOrden(e) {
        e.preventDefault()
        if (nombre !== '' && email !== '' && telefono !== '') {
            const db = getFirestore()
            const order = {
                buyer: {
                    nombre,
                    email,
                    telefono
                },
                cart: cartList,
                total,
                date: serverTimestamp()
            }

            const ordenesRef = collection(db, "ordenes");
            addDoc(ordenesRef, order)
                .then(resultado => {
                    setOrdenId(resultado.id)
                    limpiarCarrito()
                })
                .catch((error) => console.log(error))
        } else {
            alert('Todos los datos son requeridos')
        }
    }

    return (
        <div className="cart-container">
            {ordenId ? (
                <div className="compra-finalizada">
                    <h1>¡Muchas gracias por tu compra!</h1>
                    <h2>Tu pedido ha sido procesado exitosamente</h2>
                    <p><strong>Código de orden:</strong> {ordenId}</p>
                    <p><strong>Total pagado:</strong> ${total?.toLocaleString()}</p>
                    <p style={{ marginTop: '2rem', color: '#666' }}>
                        Te enviaremos un email con los detalles de tu compra.
                    </p>
                    <Link to="/" style={{
                        display: 'inline-block',
                        marginTop: '2rem',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '10px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}>
                        Volver al Catálogo
                    </Link>
                </div>
            ) : (
                <div>
                    <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
                        Finalizar Compra
                    </h1>
                    
                    <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '10px' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Resumen de tu compra:</h3>
                        <p><strong>Total de productos:</strong> {cartList.length}</p>
                        <p><strong>Total a pagar:</strong> ${total?.toLocaleString()}</p>
                    </div>

                    <form className="contact-form" onSubmit={crearOrden}>
                        <h2>Datos de Envío</h2>
                        
                        <label htmlFor="nombre">Nombre completo:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(event) => setNombre(event.target.value)}
                            required
                            placeholder="Ingresa tu nombre completo"
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            placeholder="tu@email.com"
                        />

                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={telefono}
                            onChange={(event) => setTelefono(event.target.value)}
                            required
                            placeholder="+54 9 11 1234-5678"
                        />

                        <button type="submit">
                            Confirmar Compra
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}