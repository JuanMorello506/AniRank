
import Popular from './Components/popular/Popular'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AnimeItem from './Components/anime/animeItem'


function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/anime/:id" element={<AnimeItem />}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
