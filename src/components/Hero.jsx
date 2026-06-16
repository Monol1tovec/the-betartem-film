import './Hero.css';

function Hero({ onWatchClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          THE BETARTEM
        </h1>
        <p className="hero-subtitle">Полнометражный фильм</p>
        <button className="hero-button" onClick={onWatchClick}>
          Смотреть фильм
        </button>
      </div>
    </section>
  );
}

export default Hero;
