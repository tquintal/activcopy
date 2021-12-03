import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Services from './views/Services'
import Contact from './views/Contact'
import Error from './views/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} /> {/* '*' ?? */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
