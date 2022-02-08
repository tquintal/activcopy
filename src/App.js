import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Error from './views/Error'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Main from './views/Main'
import CookieConsentLM from './views/CookieConsentLM'
import Services from './views/Services'
import { DigitalPrinting } from './views/services/DigitalPrinting'
import { BigFormat } from './views/services/BigFormat'
import { Sublimation } from './views/services/Sublimation'
import Bookbinding from './views/services/Bookbinding'
import Scanning from './views/services/Scanning'
import Shop from './views/Shop'
import VisitCards from './views/shop/VisitCards'
import TShirts from './views/shop/TShirts'
import Flyers from './views/shop/Flyers'
import BigFormatShop from './views/shop/BigFormatShop'
import Mugs from './views/shop/Mugs'
import Contact from './views/Contact'
import ThankYou from './views/ThankYou'

const CookieConsent = () => {
  const { t } = useTranslation()

  const setConsentStatusAccepted = () => {
    if (!localStorage.getItem('CookieConsent')) {
      localStorage.setItem('CookieConsent', 'accepted')
      // document.querySelector('.cookie-container').remove() ... bad practice
      window.location.reload()
    }
  }

  return (
    <div className='cookie-container'>
      <p>{t('CookieConsentText')} <Link to='/cookie-consent' className='cookies-learn-more'>{t('CookieConsentLearnMore')}</Link></p>
      <div className='cookie-btns-container'>
        <button className='cookie-accept-btn' onClick={setConsentStatusAccepted}>{t('CookieBtn2')}</button>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    document.getElementById('root').style.display = 'unset'
    document.querySelector('.loading').remove()
  }, [])

  return (
    <BrowserRouter>
      {!loading && (
        <>
          <Header />
          {!localStorage.getItem('CookieConsent') && <CookieConsent />}
          <AnimatePresence>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/services' element={<Services />} />
              <Route path='/services/digital-printing' element={<DigitalPrinting />} />
              <Route path='/services/big-format' element={<BigFormat />} />
              <Route path='/services/sublimation' element={<Sublimation />} />
              <Route path='/services/bookbinding' element={<Bookbinding />} />
              <Route path='/services/scanning' element={<Scanning />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/shop/visit-cards' element={<VisitCards />} />
              <Route path='/shop/t-shirts' element={<TShirts />} />
              <Route path='/shop/flyers' element={<Flyers />} />
              <Route path='/shop/big-format' element={<BigFormatShop />} />
              <Route path='/shop/mugs' element={<Mugs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/thank-you' element={<ThankYou />} />
              <Route path='/cookie-consent' element={<CookieConsentLM />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}
