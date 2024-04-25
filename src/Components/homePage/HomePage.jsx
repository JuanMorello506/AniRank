import React, { useState } from 'react'
import { useGlobalContext } from '../../context/global'
import '../homePage/homePage.css'
import Popular from '../popular/Popular'

export default function HomePage() {
    
    const {
        handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [render, setRender] = useState('popular')

    const switchComponents = () => {
        switch(render){
            case 'popular':
                return <Popular render={render} />
            case 'airing':
                return <Airing render={render} />
            case 'upcoming':
                return <Upcoming render={render} />
            default:
                return <Popular render={render} />
        }
    }

    const changeRender = (renderTo) => {
        setRender(renderTo)
        
        if(renderTo === 'popular'){
            getPopularAnime
        }

        if(renderTo === 'upcoming'){
            getUpcomingAnime
        }

        if(renderTo === 'airing'){
            getAiringAnime
        }
    }

  return (
    <>
        <div className='homePage-container'>
            <header>
                <div className="logo">
                    <h1>
                    {render === 'popular' ? 'Popular Anime' : 
                    render === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => changeRender('popular')} className='fas fa-fire'>Popular</button>
                    </div>
                    <form action="" className="search-form">
                        <div className="input-control">
                            <input type='text' placeholder='Search Anime' value={search} onChange={handleChange}></input>
                            <button type='submit' onClick={handleSubmit}>Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => changeRender('airing')}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => changeRender('upcoming')}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponents()}
        </div>

        

    </>
    
  )
}
