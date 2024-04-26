
import Popular from './Components/popular/Popular'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AnimeItem from './Components/anime/AnimeItem.jsx'
import HomePage from './Components/homePage/HomePage'
import CharacterInfo from './Components/characterInfo/CharacterInfo.jsx'


function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimeItem />}/>
          <Route path="/character/:id" element={<CharacterInfo />}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
