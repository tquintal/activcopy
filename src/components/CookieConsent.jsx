import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function CookieConsent() {
    const { t } = useTranslation()
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='cookie-container'
        >
            <p>{t('CookieConsentText')}</p>
            <div className='cookie-btns-container'>
                <button className='cookie-preferences-btn'>{t('CookieBtn1')}</button>
                <button className='cookie-accept-btn'>{t('CookieBtn2')}</button>
            </div>
        </motion.div>
    )
}
