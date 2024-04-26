import React,{ useEffect, useState } from 'react'
import { getCharactersFullInfoById } from '../../helpers/apiHelper'
import { useParams } from 'react-router-dom';



export default function CharacterInfo() {
    const { id } = useParams();

    const [character, setCharacter] = useState({});
    const [showMore, setShowMore] = useState(false);

    useEffect(() =>{
        getCharactersFullInfoById(id, setCharacter)
    }, [])

  return (
    <div className='character-info-con'>
        <h1 className="character-name">{character.name}</h1>
        <div className="details">
            <div className="detail">
                <div className="char-image">
                    <img src={character.images?.jpg?.image_url} alt="" />
                </div>
                <div className="character-details"></div>
            </div>
        </div>
    </div>
  )
}
