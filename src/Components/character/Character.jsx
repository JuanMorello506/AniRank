import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ character }) => {
  const { role, images, name, mal_id } = character.characters;

  return (
    <Link to={`/character/${mal_id}`}>
      <div className="character">
        <img src={images?.jpg?.image_url} alt="" />
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </Link>
  );
};

export default Character;