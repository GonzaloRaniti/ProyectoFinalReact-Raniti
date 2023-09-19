
import { useEffect, useState } from 'react';
import '../app.css';
import prod from "../../productos.json"
import { Link } from 'react-router-dom';



const Item = ({ producto }) => {
    return (
        
        <div className='card'>
            <Link to={`/producto/${producto.id}`}>
            Ir a Detalle
            </Link>
            <p>{producto.titulo}</p>
            <p>Precio $ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.categoria}</p>
            <img src={producto.image} alt="Imagen" className='img' />
        </div>
        
    )
}

export default Item