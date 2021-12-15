import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Services(props) {
    const { t } = useTranslation()
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='services'
        >
            <div className='services-container'>
                <h1>{t('Services.Title')}</h1>
                <div className='services-cards-container'>
                    <div className='service-card-container'>
                        <div className='service-card'>
                            <h3>*Icon/Image*</h3>
                        </div>
                        <p>{t('Services.Service1')}</p>
                    </div>
                    <div className='service-card-container'>
                        <div className='service-card'>
                            <h3>*Icon/Image*</h3>
                        </div>
                        <p>{t('Services.Service2')}</p>
                    </div>
                    <div className='service-card-container'>
                        <div className='service-card'>
                            <h3>*Icon/Image*</h3>
                        </div>
                        <p>{t('Services.Service3')}</p>
                    </div>
                    <div className='service-card-container'>
                        <div className='service-card'>
                            <h3>*Icon/Image*</h3>
                        </div>
                        <p>{t('Services.Service4')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
