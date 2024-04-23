import React from 'react'
import { useGlobalContex } from '../context/global'

export default function Popular() {
  const {popularAnime, isSearch} = useGlobalContex()

  const conditionalRender = () => {
    if(!isSearch){
      return popularAnime.map((anime) => {
        console.log(anime)
      })
    }
  }

  return (
    <div>
      <div className="popularAnime">
        {conditionalRender()}
      </div>
    </div>
  )
}
