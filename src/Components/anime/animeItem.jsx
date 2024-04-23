    import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
    
    export default function animeItem() {
      const {id} = useParams()
      const [anime, setAnime] = useState({})
      const [characters, setCharacters] = useState([])


      
      return (
        <div>anime</div>
      )
    }
    