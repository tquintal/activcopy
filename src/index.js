import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import ClockLoader from 'react-spinners/ClockLoader'
import './App.css'
import App from './App'

let color = '#ff4500'
const Loading =
  <div className='loading-screen'>
    <ClockLoader color={color} />
    <p>loading</p>
  </div>

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    debug: false,
    detection: {
      order: ['cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
ReactDOM.render(
  <Suspense fallback={Loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
