import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function Checkout() {



    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")


    function crearOrden(){
        const db = getFirestore()
        const order = {
            buyer: {
            nombre, 
            email, 
            telefono, 
            total
        }}

        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, order).then(resultado => console.log(resultado))

    }





    return (

<form style={{ display: 'flex', flexDirection: 'column', gap: '30' }}>
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />

    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />

    <label htmlFor="telefono">Telefono</label>
    <input type="text" id="telefono" name="telefono" value={telefono} onChange={(event) => setTelefono(event.target.value)} />

    <button type="button" onClick={crearOrden}>Finalizar compra</button>
</form>

    )


}