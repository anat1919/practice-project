import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Student1Page from './pages/personal/Student1Page';
import Student2Page from './pages/personal/Student2Page';
import MainPage from './pages/common/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">🌸 FlowerShop</Link>
            <div className="nav-links">
              <Link to="/">Главная</Link>
              <Link to="/student1">Каталог (Аня)</Link>
              <Link to="/student2">Другая страница (Яна)</Link>
              <Link to="/cart" className="cart-link">🛒 Корзина</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/student1" element={<Student1Page />} />
          <Route path="/student2" element={<Student2Page />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 FlowerShop - Учебная практика. Разработано в команде.</p>
          <p>Студент 1: [Кузнецова] | Студент 2: [Басовская]</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;