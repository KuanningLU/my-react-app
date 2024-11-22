import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>🐶 歡迎來到第二十組狗狗百科 🐶</h1>
        <p>如果你想要了解20樣不同品種狗狗，那就點擊開始探索吧!</p>
        <Link to="/app" className="enter-button">
          開始探索
        </Link>
      </header>
    </div>
  );
}

export default Home;
