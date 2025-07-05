import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import ItemList from './itemList';
import '../App.css';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { idCategory } = useParams();
    const db = getFirestore();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            
            try {
                console.log('🔍 Iniciando consulta a Firebase...');
                console.log('📂 Categoría filtrada:', idCategory || 'Todas');
                
                let productosQuery;
                
                if (idCategory) {
                    productosQuery = query(
                        collection(db, "productos"), 
                        where("categoria", "==", idCategory)
                    );
                    console.log('🔍 Consultando productos de categoría:', idCategory);
                } else {
                    productosQuery = collection(db, "productos");
                    console.log('🔍 Consultando todos los productos');
                }

                const snapshot = await getDocs(productosQuery);
                console.log('📊 Documentos encontrados:', snapshot.size);
                
                const data = snapshot.docs.map((doc) => {
                    const producto = { id: doc.id, ...doc.data() };
                    console.log('📦 Producto cargado:', producto.titulo, 'ID:', doc.id);
                    return producto;
                });
                
                setProductos(data);
                console.log('✅ Productos cargados exitosamente:', data.length);
                
            } catch (error) {
                console.error("❌ Error getting documents: ", error);
                setError("Error al cargar los productos: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [idCategory, db]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando productos...</p>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                    {idCategory ? `Filtrando por: ${idCategory}` : 'Cargando todos los productos'}
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error</h2>
                <p>{error}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    style={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        marginTop: '1rem'
                    }}
                >
                    Reintentar
                </button>
            </div>
        );
    }

    return (
        <div className='item-list-container'>
            {productos.length === 0 ? (
                <div className="no-products">
                    <h2>No se encontraron productos</h2>
                    <p>Intenta con otra categoría o vuelve más tarde.</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                        Categoría actual: {idCategory || 'Todas'}
                    </p>
                </div>
            ) : (
                <>
                    <div style={{ 
                        textAlign: 'center', 
                        marginBottom: '2rem',
                        color: 'white',
                        background: 'rgba(255,255,255,0.1)',
                        padding: '1rem',
                        borderRadius: '10px'
                    }}>
                        <h3>Productos encontrados: {productos.length}</h3>
                        {idCategory && <p>Categoría: {idCategory}</p>}
                    </div>
                    <ItemList productos={productos} />
                </>
            )}
        </div>
    );
}
