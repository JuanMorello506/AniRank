// AnimeItem.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Character from '../character/Character';
import Trailer from '../trailer/Trailer';
import '../anime/animeItem.css'
import { getAnimeById, getCharactersById } from '../../helpers/apiHelper';

const AnimeItem = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);


  useEffect(() => {
    
    getAnimeById(id, setAnime);
    getCharactersById(id, setCharacters);
    
  }, []);

  const { title, synopsis, trailer, duration, aired, season, images, rank, score, scored_by, popularity, 
    status, rating, source } = anime;

  return (
    <div className='animeItem-container'>
      <h1 className='main-title'>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image-container">
            <img src={images?.jpg?.large_image_url} alt="" />
          </div>
          <div className="anime-details">
            <p><span>Aired: </span><span>{aired?.string}</span></p>
            <p><span>Rating: </span><span>{rating}</span></p>
            <p><span>Rank: </span><span>{rank}</span></p>
            <p><span>Score: </span><span>{score}</span></p>
            <p><span>Scored By: </span><span>{scored_by}</span></p>
            <p><span>Popularity: </span><span>{popularity}</span></p>
            <p><span>Status: </span><span>{status}</span></p>
            <p><span>Source: </span><span>{source}</span></p>
            <p><span>Season: </span><span>{season}</span></p>
            <p><span>Duration: </span><span>{duration}</span></p>
          </div>
        </div>
        <p className="description">
          {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Read More'}</button>
        </p>
        <Trailer trailer={trailer} />
        <h3 className='title'>Characters</h3>
        <div className="characters">
              {characters?.map((character, index) => (
                <Character character={character} key={index} />
              ))}
        </div>
          
        
      </div>
    </div>
  );
};

export default AnimeItem;
