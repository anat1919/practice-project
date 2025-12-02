import React, { useState } from 'react';
import './Student1Page.css';

const Student1Page = () => {
  const [flowers] = useState([
    {
      id: 1,
      name: "Красная роза",
      price: 350,
      description: "Классическая красная роза, символ любви и страсти",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400",
      category: "розы",
      inStock: true
    },
    {
      id: 2,
      name: "Белая лилия",
      price: 280,
      description: "Элегантные белые лилии для особых случаев",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400",
      category: "лилии",
      inStock: true
    },
    // ... остальные цветы
  ]);

  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('все');
  const [sortBy, setSortBy] = useState('name');

  const filteredFlowers = selectedCategory === 'все' 
    ? flowers 
    : flowers.filter(flower => flower.category === selectedCategory);

  const sortedFlowers = [...filteredFlowers].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const addToCart = (flower) => {
    setCart([...cart, flower]);
    alert(`${flower.name} добавлен в корзину!`);
  };

  const categories = ['все', 'розы', 'лилии', 'тюльпаны', 'орхидеи', 'полевые', 'герберы', 'пионы', 'хризантемы'];

  return (
    <div className="student1-page">
      <div className="page-header">
        <h1>🌸 Каталог цветов</h1>
        <p>Выберите самые красивые цветы для любого случая</p>
      </div>

      <div className="controls">
        <div className="filter-section">
          <label>Категория:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="sort-section">
          <label>Сортировка:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">По названию</option>
            <option value="price-asc">По цене (возр.)</option>
            <option value="price-desc">По цене (убыв.)</option>
          </select>
        </div>

        <div className="cart-info">
          <span>🛒 Корзина: {cart.length} товаров</span>
        </div>
      </div>

      <div className="flowers-grid">
        {sortedFlowers.map(flower => (
          <div key={flower.id} className="flower-card">
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
                  onClick={() => addToCart(flower)}
                  disabled={!flower.inStock}
                >
                  {flower.inStock ? 'В корзину' : 'Нет в наличии'}
                </button>
              </div>
              <div className="category-tag">{flower.category}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="page-footer">
        <h3>Обо мне</h3>
        <p>Я занимаюсь разработкой каталога для цветочного магазина. 
           Эта страница включает фильтрацию, сортировку и функционал корзины.</p>
      </div>
    </div>
  );
};

export default Student1Page;