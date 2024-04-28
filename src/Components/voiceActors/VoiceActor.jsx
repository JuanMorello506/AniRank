import React from 'react';
import '../voiceActors/voiceActor.css'


const VoiceAuthor = ({ actor }) => {
  const {language} = actor
  const {images, name} = actor.person 
  

  return (
    <div className="actor">
        
            <img src={images?.jpg?.image_url} alt="" />
            <h4>{name}</h4>
            <p>{language}</p>
        
      </div>
    
  );
};

export default VoiceAuthor;