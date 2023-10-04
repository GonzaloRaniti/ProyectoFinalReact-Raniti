import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Checkout() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const { cartList,  limpiarCarrito } = useContext(CartContext);
    const total = cartList.reduce((total, producto) => total + producto.precio * producto.quantity, 0)
    function crearOrden(e){
        e.preventDefault()
        if(nombre !== '' && email !== '' && telefono !== ''){
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
            .then(resultado =>{
                setOrdenId(resultado.id)
                limpiarCarrito()
            })
            .catch((error)=> console.log(error))
        }else{
            alert('Todos los datos son requeridos')
        }

    }





    return (

<div>
    {ordenId 
    ?      <div className="compra-finalizada">
                        <h1>¡Muchas gracias por su compra!</h1>
                        <h2>Deja tus datos en la sección contactos!</h2>
                        <p>Su código de envío es: {ordenId}</p>
                    </div>
    :<form style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px', margin: 'auto' }}>
    <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="nombre">Nombre</label>
    <input
        style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
        type="text"
        id="nombre"
        name="nombre"
        onChange={(event) => setNombre(event.target.value)}
    />

    <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="email">Email</label>
    <input
        style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
        type="text"
        id="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
    />

    <label style={{ marginBottom: '5px', fontWeight: 'bold' }} htmlFor="telefono">Telefono</label>
    <input
        style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
        type="text"
        id="telefono"
        name="telefono"
        onChange={(event) => setTelefono(event.target.value)}
    />

    <button
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        type="button"
        onClick={crearOrden}
    >
        Finalizar compra
    </button>
</form>
    }
</div>

    )


}