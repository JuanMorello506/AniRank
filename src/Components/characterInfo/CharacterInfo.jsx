import React, { useEffect, useState } from 'react';
import { getCharactersFullInfoById, getApparitionsById } from '../../helpers/apiHelper';
import { useParams } from 'react-router-dom';
import '../characterInfo/characterInfo.css'
import VoiceAuthor from '../voiceActors/VoiceActor'
import { Link } from 'react-router-dom';


export default function CharacterInfo() {
    const { id } = useParams();

    const [character, setCharacter] = useState({});
    const [animes, setAnimes] = useState([])
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        getCharactersFullInfoById(id, setCharacter);
        getApparitionsById(id, setAnimes);
        
    }, []);

    const { name, images, name_kanji, nicknames, about, voices} = character;

  

    return (
        <div className='character-info-con'>
            <h1 className="character-name">{name}</h1>
            <div className="character-details">
                <div className="character-detail">
                    <div className="char-image">
                        <img src={images?.jpg?.image_url} alt="" />
                    </div>
                    <div className="details-con">
                        <h2>{name_kanji}</h2>
                        <h3>{nicknames?.join(', ')}</h3>
                        
                    </div>
                   
                </div>
                
                <p className='about'>{showMore ? about : about?.substring(0, 450) + '...'}
                            <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Read More'}</button>
                </p>
                <div className="apparitions">
                    <h3 className='title'>Animeography</h3>
                    <div className="apparitions-con">
                        {animes?.map((a) => (
                            <div className="apparition-img-con">
                                <Link to={`/anime/${a.anime.mal_id}`} key={a.anime.mal_id}>
                                    <img src={a.anime.images?.jpg?.large_image_url} alt={a.anime.title} />
                                </Link>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <h3 className='title'>Voice actors</h3>
                <div className="voice-actors">
                    {voices?.map((actor, index) => (
                    <VoiceAuthor actor={actor} key={index} />
                ))}
                </div>
            </div>

        </div>
    );
}
