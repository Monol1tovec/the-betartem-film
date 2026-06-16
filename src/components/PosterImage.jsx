import './PosterImage.css';

function PosterImage() {
  return (
    <section className="poster-section fade-in">
      <div className="poster-container">
        <img
          src="/poster.png"
          alt="THE BETARTEM Film Poster"
          className="poster-image"
        />
      </div>
    </section>
  );
}

export default PosterImage;
