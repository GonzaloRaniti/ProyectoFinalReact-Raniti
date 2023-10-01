
import { useState } from 'react';
import '../app.css';
import productos from '../../productos.json'
import { useCart } from './CartContext';
import { Link } from "react-router-dom"
import ItemCount from './itemCount';






const ItemDetail = ({ producto }) => {

    const [goToCart, setGoToCart] = useState(false)
    const { addItem } = useCart()

    const onAdd = (quantity) => {
        addItem(producto, quantity)
        setGoToCart(true)
        
    }


    return (
        
        <div className='card'>
            <h1>{producto.titulo}</h1>
            <p>{producto.nombre}</p>
            <p>Precio $ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <img src={producto.image} alt="imagen" className='img' />

            {
                goToCart
                    ? <Link to='/cart' className="terminarCompra">Terminar Compra</Link>
                    : <ItemCount initial={0} stock={10} onAdd={onAdd} />
            }
            
        </div>
    )
}


export default ItemDetail