import React from 'react'
import { useGlobalContext } from '../../context/global'
import { Link } from 'react-router-dom';
import "../upcoming/upcoming.css"

export default function Popular({render}) {
  const {upcomingAnime, isSearch, search} = useGlobalContext()
  console.log(upcomingAnime)
  
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
    render ==='upcoming' ? (
      search ? (
        filterByFirstLetter(upcomingAnime, search) // Filter based on first letter
          .map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
            </Link>
          ))
      ) : (
        upcomingAnime.map((anime) => ( // Render full list if not searching
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
