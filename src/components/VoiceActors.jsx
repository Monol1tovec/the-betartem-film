import './VoiceActors.css';

function VoiceActors() {
  const voiceActors = [
    'Monolit',
    'Wizoneair',
    'LitenKatten',
    'Aramixko',
    'Rita125',
    'DaikuZ',
    'DimasGold',
    'Greengostin',
    'Dariy_Dash',
    'Avokado'
  ];

  return (
    <section className="voice-actors fade-in">
      <div className="voice-actors-content">
        <h2 className="voice-actors-title">Озвучкеры</h2>
        <div className="voice-actors-grid">
          {voiceActors.map((actor, index) => (
            <div key={index} className="voice-actor-card">
              <span className="voice-actor-name">{actor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VoiceActors;
