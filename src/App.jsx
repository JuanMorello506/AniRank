import { useState } from 'react'
import './App.css'
import Popular from './components/Popular'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Popular/>
      </BrowserRouter>
    </>
  )
}

export default App
