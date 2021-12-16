import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { backToTop } from '../../utils'

export default function Services() {
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
                    <NavLink onClick={() => backToTop()} to='/digital-printing'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Services.Service1')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/big-format'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Services.Service2')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/sublimation'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Services.Service3')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/bookbinding'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Services.Service4')}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}