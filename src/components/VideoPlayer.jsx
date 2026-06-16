import { forwardRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = forwardRef((props, ref) => {
  return (
    <section className="video-section fade-in" ref={ref}>
      <div className="netflix-player">

        <video
          className="video"
          controls
          playsInline
          preload="metadata"
        >
          <source src="/the-betartem-film/movie.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

      </div>
    </section>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
