import React from 'react';
import { Link } from 'react-router-dom';
import '../character/character.css'


const Character = ({ character }) => {
  const {role} = character
  const {images, name, mal_id} = character.character
  

  return (
    <div className="character">
        <Link to={`/character/${mal_id}`}>
            <img src={images?.jpg?.image_url} alt="" />
            <h4>{name}</h4>
            <p>{role}</p>
        </Link>
      </div>
    
  );
};

export default Character;