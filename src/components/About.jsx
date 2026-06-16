import './About.css';

function About() {
  return (
    <section className="about fade-in">
      <div className="about-content">
        <h2 className="about-title">О фильме</h2>
        <div className="about-description">
          <p className="about-text">
            THE BETARTEM — независимый полнометражный фильм, доступный для просмотра онлайн.
          </p>
          <div className="about-divider"></div>
          <p className="about-text">
            Фильм рассказывает о лысом герое, который пытается защитить Примопарк от нападок Монозлодея и его союзников. История сочетает элементы супергеройского приключения, комедии и интернет-мемов, постепенно превращаясь в масштабное противостояние между героями и злодеями.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
