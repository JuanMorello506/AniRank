import React from 'react'
import { useGlobalContext } from '../../context/global'
import { Link } from 'react-router-dom';
import "../popular/popular.css"

export default function Popular({render}) {
  const {popularAnime, isSearch, search} = useGlobalContext()
  console.log(popularAnime)
  
  const filterByFirstLetter = (list, searchTerm) => {
    if (searchTerm !== '') {
      return list.filter(
        (item) => item.title[0].toLowerCase() === searchTerm[0].toLowerCase()
      );
    } else {
      return list;
    }
  };

  const conditionalRender = () => (
  render === 'popular' ? (
    search ? (
      filterByFirstLetter(popularAnime, search) // Filter based on first letter
        .map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
          </Link>
        ))
    ) : (
      popularAnime.map((anime) => ( // Render full list if not searching
        <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
        </Link>
      ))
    )
  ) : <p>ERROR</p> 
);

  return (
    
    <div className="popular-anime">
      {conditionalRender()}
    </div>
    
    
    
  )

  
}
