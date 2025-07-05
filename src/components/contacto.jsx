import React, { useState } from 'react';
import '../App.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado:', formData);
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        setFormData({
            nombre: '',
            email: '',
            mensaje: ''
        });
    };

    return (
        <div className="cart-container">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
                Contacto
            </h1>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
                <p>¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría escucharte!</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Envíanos un mensaje</h2>
                
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre completo"
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                />
                
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="6"
                    required
                    placeholder="Cuéntanos qué necesitas..."
                ></textarea>
                
                <button type="submit">
                    Enviar Mensaje
                </button>
            </form>

            <div style={{ 
                marginTop: '3rem', 
                textAlign: 'center', 
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px'
            }}>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Información de Contacto</h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Email:</strong> info@cgindumentaria.com
                </p>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Teléfono:</strong> +54 9 11 1234-5678
                </p>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Horarios:</strong> Lunes a Viernes 9:00 - 18:00
                </p>
            </div>
        </div>
    );
}

export default Contacto;

