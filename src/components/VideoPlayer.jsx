import { forwardRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = forwardRef((props, ref) => {
  return (
    <section className="video-section fade-in" ref={ref}>
      <div className="video-wrapper">
        <iframe
          src="https://drive.google.com/file/d/1iLQPqt_pYQHp1FwoNkUZYPS8UJyQvtDn/preview"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="THE BETARTEM Film"
        />
      </div>
    </section>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
