
import Popular from './Components/popular/Popular'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AnimeItem from './Components/anime/AnimeItem.jsx'
import HomePage from './Components/homePage/HomePage'


function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimeItem />}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
