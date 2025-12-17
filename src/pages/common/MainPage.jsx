import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [featuredFlowers, setFeaturedFlowers] = useState([
    {
      id: 1,
      name: "Романтический букет",
      price: 1200,
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w-400",
      description: "Идеально для свидания"
    },
    {
      id: 2,
      name: "Букет невесты",
      price: 2500,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w-400",
      description: "Для особого дня"
    },
    {
      id: 3,
      name: "Бизнес-букет",
      price: 1800,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w-400",
      description: "Для деловых встреч"
    }
  ]);

  const [teamMembers] = useState([
    {
      name: "[Твое имя]", // Вставьте ваше имя
      role: "Frontend разработчик",
      task: "Каталог товаров, фильтрация, UI/UX",
      github: "anat1919"
    },
    {
      name: "[Имя второго студента]", // Второй студент вставит свое
      role: "Frontend разработчик",
      task: "Корзина, оформление заказа, контакты",
      github: "anaysob"
    }
  ]);

  const [currentImage, setCurrentImage] = useState(0);
  const slides = [
    "🌸 Самые свежие цветы каждый день",
    "🚚 Бесплатная доставка при заказе от 2000₽",
    "🎁 Скидка 10% на первый заказ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      {/* Hero секция */}
      <section className="hero">
        <div className="hero-content">
          <h1>🌸 FlowerShop - Цветы с доставкой</h1>
          <p>Создаем настроение с 2024 года</p>
          <div className="hero-slider">
            <div className="slide">{slides[currentImage]}</div>
          </div>
          <Link to="/student1" className="cta-button">
            Смотреть каталог →
          </Link>
        </div>
      </section>

      {/* О проекте */}
      <section className="about-project">
        <h2>🎓 Учебный проект</h2>
        <p>Этот интернет-магазин цветов разработан в рамках учебной практики.</p>
        <p>Цель проекта: освоить React, Git и командную разработку.</p>
        
        <div className="project-stats">
          <div className="stat">
            <span className="number">2</span>
            <span className="label">разработчика</span>
          </div>
          <div className="stat">
            <span className="number">3+</span>
            <span className="label">страницы</span>
          </div>
          <div className="stat">
            <span className="number">8+</span>
            <span className="label">компонентов</span>
          </div>
          <div className="stat">
            <span className="number">1000+</span>
            <span className="label">строк кода</span>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="team-section">
        <h2>👥 Наша команда</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">
                {member.name.charAt(0)}
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="task">{member.task}</p>
              <a 
                href={`https://github.com/${member.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub: {member.github}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Популярные товары */}
      <section className="featured-products">
        <h2>✨ Популярные букеты</h2>
        <div className="products-grid">
          {featuredFlowers.map(flower => (
            <div key={flower.id} className="product-card">
              <div 
                className="product-image"
                style={{ backgroundImage: `url(${flower.image})` }}
              />
              <div className="product-info">
                <h4>{flower.name}</h4>
                <p className="description">{flower.description}</p>
                <div className="product-footer">
                  <span className="price">{flower.price} ₽</span>
                  <Link to="/student1" className="buy-button">Выбрать</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Как работает магазин */}
      <section className="how-it-works">
        <h2>📦 Как сделать заказ</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Выберите цветы</h3>
            <p>Перейдите в каталог и добавьте понравившиеся цветы в корзину</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Оформите заказ</h3>
            <p>Укажите контактные данные и адрес доставки</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Получите заказ</h3>
            <p>Мы доставим свежие цветы в удобное для вас время</p>
          </div>
        </div>
      </section>

{/* === ЭТОТ БЛОК ДОБАВИЛА [anaysob] === */}
<section className="promotions">
  <h2>🎁 Акции и скидки</h2>
  <div className="promotions-grid">
    <div className="promo-card">
      <h3>Скидка 10% новым клиентам</h3>
      <p>Промокод: FLOWER10</p>
    </div>
    <div className="promo-card">
      <h3>Бесплатная доставка</h3>
      <p>При заказе от 2500 рублей</p>
    </div>
    <div className="promo-card">
      <h3>Подарок к заказу</h3>
      <p>Открытка и конфеты в подарок</p>
    </div>
  </div>
</section>


      
      {/* Ссылки на страницы */}
      <section className="page-links">
        <h2>🔗 Страницы проекта</h2>
        <div className="links-grid">
          <Link to="/student1" className="page-link">
            <div className="link-icon">🛍️</div>
            <h3>Каталог цветов</h3>
            <p>Разработано: {teamMembers[0].name}</p>
            <p>Фильтрация, поиск, карточки товаров</p>
          </Link>
          
          <Link to="/student2" className="page-link">
            <div className="link-icon">🛒</div>
            <h3>Корзина и оформление</h3>
            <p>Разработано: {teamMembers[1].name}</p>
            <p>Корзина, форма заказа, контакты</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
