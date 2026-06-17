import { forwardRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = forwardRef((props, ref) => {
  return (
    <section className="video-section fade-in" ref={ref}>
      <div className="video-container">
        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=-239630984&id=456239017&hash=e81583184c017ea8&hd=3"
          title="THE BETARTEM Film"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          allowFullScreen
        />
      </div>
    </section>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
