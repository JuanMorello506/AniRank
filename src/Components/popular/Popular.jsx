import React from 'react'
import { useGlobalContex } from '../../context/global'
import { Link } from 'react-router-dom';
import "../popular/popular.css"

export default function Popular() {
  const {popularAnime, isSearch} = useGlobalContex()
  console.log(popularAnime)

  const conditionalRender = () => (
    !isSearch && popularAnime.map((anime) => (
      <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
      </Link>
    ))
  );

  return (
    
    <div className="popular-anime">
      {conditionalRender()}
    </div>
    
    
    
  )

  
}
