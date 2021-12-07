import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import Footer from './components/Footer'
import Error from './views/Error'
import Main from './views/Main'
import Services from './views/Services'
import Contact from './views/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  )
}
