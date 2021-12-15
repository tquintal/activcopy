import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import Error from './views/Error'
import Main from './views/Main'
import Services from './views/Services'
import Contact from './views/Contact'

export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      document.querySelector('.loading').remove()
      document.getElementById('root').style.display = 'unset'
    }, 1150)
  }, [])

  return (
    <BrowserRouter>
      {!loading && (
        <>
          <Header />
          <AnimatePresence>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}
