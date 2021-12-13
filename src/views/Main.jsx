import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Main(props) {
    const { t } = useTranslation()
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='media' />
            <div className='description'>
                <div className='description-container'>
                    <div>
                        <h1>{t('Description.Title')}</h1>
                        <p>{t('Description.Content')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
