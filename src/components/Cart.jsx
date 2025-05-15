import React from 'react';
import './styleCart.css';

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className='close-button' aria-label="Cerrar carrito">×</button>
      </div>

      <div className='cart-content'>
        {cartItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío</p>
        ) : (
          <ul className='cart-items'>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-item'>
                <div>
                  <strong>{item.nombre}</strong>
                  <p>${item.precio} x {item.cantidad}</p>
                </div>
                <button
                  onClick={() => borrarProducto(item)}
                  className='delete-button'
                  aria-label={`Eliminar ${item.nombre}`}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p className="total">Total: ${total.toFixed(2)}</p>
          <button className="checkout-button" onClick={() => alert('Implementar checkout')}>
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
