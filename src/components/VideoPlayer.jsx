import { forwardRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = forwardRef((props, ref) => {
  return (
    <section className="video-section fade-in" ref={ref}>
      <div className="video-container">

        <iframe
          src="https://vk.com/video_ext.php?oid=411665738&id=456239907&hash=a50025561cde9839"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="THE BETARTEM Film"
        />

      </div>
    </section>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
