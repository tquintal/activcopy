import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import 'react-slideshow-image/dist/styles.css'
import ServiceBack from '../../components/ServiceBack'

export default function Scanning() {

    const { t } = useTranslation()

    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='service'>
                <div className='service-container'>
                    <ServiceBack />
                    <div>
                        <h1 className='service-title'>{t('Scanning.SCTitle')}</h1>
                        <p className='service-description'>{t('Scanning.SCDesc')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
