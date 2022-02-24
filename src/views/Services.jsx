import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { backToTop } from '../utils'
import '../style/Services.css'
import BCards from '../assets/b-cards.jpg'
import TShirts from '../assets/t-shirts.jpg'
import Flyers from '../assets/flyers.jpg'
import BFormat from '../assets/b-format.jpg'
import Stickers from '../assets/stickers.jpg'

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
                    <NavLink onClick={() => backToTop()} to='/services/digital-printing'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + Stickers + ')'
                            }}>
                            </div>
                            <p>{t('Services.Service1')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/services/big-format'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + BFormat + ')'
                            }}>
                            </div>
                            <p>{t('Services.Service2')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/services/sublimation'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + TShirts + ')'
                            }}>
                            </div>
                            <p>{t('Services.Service3')}</p>
                        </div>
                    </NavLink>
                    <div className='services-bottom-container'>
                        <NavLink onClick={() => backToTop()} to='/services/bookbinding'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'url(' + Flyers + ')'
                                }}>
                                </div>
                                <p>{t('Services.Service4')}</p>
                            </div>
                        </NavLink>
                        <NavLink onClick={() => backToTop()} to='/services/scanning'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'url(' + BCards + ')'
                                }}>
                                </div>
                                <p>{t('Services.Service5')}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
