
import Popular from './Components/popular/Popular'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/anime/:id" element={<animeItem />}/>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
