
import React, { useState } from 'react';
import './Student2Page.css';

const Student2Page = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Красная роза", price: 350, quantity: 2 },
    { id: 2, name: "Белая лилия", price: 280, quantity: 1 },
    { id: 3, name: "Желтый тюльпан", price: 200, quantity: 5 },
  ]);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (!contactInfo.name || !contactInfo.phone) {
      alert('Пожалуйста, заполните имя и телефон');
      return;
    }
      alert(`Заказ оформлен! Сумма: ${total}₽\nС вами свяжутся по телефону: ${contactInfo.phone}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  return (
    <div className="student2-page">
      <div className="page-header">
        <h1>🛒 Оформление заказа</h1>
        <p>Здесь вы можете оформить заказ и указать контактные данные</p>
      </div>

      <div className="cart-section">
        <h2>Ваша корзина</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Корзина пуста</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p className="item-price">{item.price} ₽ × {item.quantity}</p>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="item-total">{item.price * item.quantity} ₽</span>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Итого:</span>
                <span className="total-amount">{total} ₽</span>
              </div>
            </div>
          </>
        )}
      </div>

<div className="checkout-section">
        <h2>Контактная информация</h2>
        <div className="contact-form">
          <div className="form-group">
            <label>Имя *</label>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleInputChange}
              placeholder="email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label>Телефон *</label>
            <input
              type="tel"
              name="phone"
              value={contactInfo.phone}
              onChange={handleInputChange}
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Адрес доставки</label>
            <textarea
              name="address"
              value={contactInfo.address}
              onChange={handleInputChange}
              placeholder="Улица, дом, квартира"
              rows="3"
            />
          </div>
        </div>
      </div>

      <div className="order-section">
        <h2>Детали заказа</h2>
        <div className="order-info">
          <p><strong>Доставка:</strong> бесплатно при заказе от 2000 ₽</p>
          <p><strong>Время доставки:</strong> 2-4 часа</p>
          <p><strong>Оплата:</strong> наличными или картой курьеру</p>
        </div>
        
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Оформить заказ • {total} ₽
        </button>
      </div>

      <div className="page-footer">
        <h3>Обо мне</h3>
        <p>Я занимаюсь разработкой функционала корзины и оформления заказа. 
           Моя страница включает управление корзиной, форму для контактных данных и процесс оформления заказа.</p>
        <p><strong>Контакт для связи со мной:</strong> student2@example.com</p>
      </div>
    </div>
  );
};

export default Student2Page;