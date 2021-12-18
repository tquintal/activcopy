import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Footer from './components/Footer'
import Error from './views/Error'
import Main from './views/Main'
import Services from './views/Services.jsx'
import { DigitalPrinting } from './views/services/DigitalPrinting.jsx'
import BigFormat from './views/services/BigFormat.jsx'
import Sublimation from './views/services/Sublimation.jsx'
import Bookbinding from './views/services/Bookbinding.jsx'
import Contact from './views/Contact'

const CookieConsent = () => {
  const { t } = useTranslation()

  const setConsentStatus = () => {
    if (!localStorage.getItem('CookieConsent')) {
      localStorage.setItem('CookieConsent', true)
      // document.querySelector('.cookie-container').remove() ... bad practice
      window.location.reload()
    } else {
      return
    }
  }

  return (
    <div className='cookie-container'>
      <p>{t('CookieConsentText')}</p>
      <div className='cookie-btns-container'>
        <button className='cookie-preferences-btn'>{t('CookieBtn1')}</button>
        <button className='cookie-accept-btn' onClick={setConsentStatus}>{t('CookieBtn2')}</button>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    document.getElementById("root").style.display = "unset"
    document.querySelector(".loading").remove()
  }, [])

  return (
    <BrowserRouter>
      {!loading && (
        <>
          <Header />
          {!localStorage.getItem('CookieConsent') && (<CookieConsent />)}
          <AnimatePresence>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/services' element={<Services />} />
              <Route path='/services/digital-printing' element={<DigitalPrinting />} />
              <Route path='/services/big-format' element={<BigFormat />} />
              <Route path='/services/sublimation' element={<Sublimation />} />
              <Route path='/services/bookbinding' element={<Bookbinding />} />
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
