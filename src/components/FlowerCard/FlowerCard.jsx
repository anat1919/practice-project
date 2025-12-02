import React from 'react';
import './FlowerCard.css';

const FlowerCard = ({ flower, onAddToCart }) => {
  return (
    <div className="flower-card">
      <div className="flower-image">
        <img src={flower.image} alt={flower.name} />
        {!flower.inStock && <div className="out-of-stock">Нет в наличии</div>}
      </div>
      <div className="flower-info">
        <h3>{flower.name}</h3>
        <p className="description">{flower.description}</p>
        <div className="flower-footer">
          <span className="price">{flower.price} ₽</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(flower)}
            disabled={!flower.inStock}
          >
            {flower.inStock ? 'В корзину' : 'Нет в наличии'}
          </button>
        </div>
        <div className="category-tag">{flower.category}</div>
      </div>
    </div>
  );
};

export default FlowerCard;