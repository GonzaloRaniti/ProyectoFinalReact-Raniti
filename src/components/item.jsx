import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    // Normalizar la ruta de la imagen
    const imageUrl = producto.image?.startsWith('./') ? producto.image.replace('./', '/') : producto.image;
    return (
        <div className='card'>
            <img src={imageUrl} alt={producto.titulo} />
            <h1>{producto.titulo}</h1>
            <p className='precio'>$ {producto.precio?.toLocaleString()}</p>
            <p>{producto.descripcion}</p>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Stock:</strong> {producto.stock} unidades</p>
            <Link to={`/producto/${producto.id}`}>
                Ver Detalles
            </Link>
        </div>
    )
}

export default Item;
