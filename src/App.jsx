import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import PosterImage from './components/PosterImage';
import VideoPlayer from './components/VideoPlayer';
import About from './components/About';
import Credits from './components/Credits';
import Sponsors from './components/Sponsors';
import VoiceActors from './components/VoiceActors';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <ParticlesBackground />
      <Hero onWatchClick={scrollToVideo} />
      <PosterImage />
      <VideoPlayer ref={videoRef} />
      <About />
      <Credits />
      <Sponsors />
      <VoiceActors />
      <Footer />
    </div>
  );
}

export default App;
