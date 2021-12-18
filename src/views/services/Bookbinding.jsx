import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ServiceBack from '../../components/ServiceBack'

export default function Bookbinding() {
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
                    <h1>{t('Services.Service4')}</h1>
                    <p>{t('Description.Content')}</p>
                </div>
            </div>
        </motion.div>
    )
}
