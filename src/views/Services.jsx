import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MdOutlineDesignServices } from 'react-icons/md'
import { backToTop } from '../utils'
import '../style/Services.css'
import BCards from '../assets/b-cards.jpg'
import TShirts from '../assets/t-shirts.jpg'
import BookBinding from '../assets/bookbinding.jpg'
import BFormat from '../assets/b-format.jpg'
import Stickers from '../assets/stickers.jpg'

export default function Services() {
    const { t } = useTranslation()

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: 'services'
    }

    return (
        <motion.div {...motionProps}>
            <div className='services-container'>
                <div className='shop-title'>
                    <h1>{t('Services.Title')}</h1>
                    <MdOutlineDesignServices size='2em' />
                </div>
                <div className='services-cards-container'>
                    <NavLink onClick={() => backToTop()} to='/services/digital-printing'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + Stickers + ')'
                            }}>
                            </div>
                            <p className='service-card-text'>{t('Services.Service1')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/services/big-format'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + BFormat + ')'
                            }}>
                            </div>
                            <p className='service-card-text'>{t('Services.Service2')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/services/sublimation'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'url(' + TShirts + ')'
                            }}>
                            </div>
                            <p className='service-card-text'>{t('Services.Service3')}</p>
                        </div>
                    </NavLink>
                    <div className='services-bottom-container'>
                        <NavLink onClick={() => backToTop()} to='/services/bookbinding'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'url(' + BookBinding + ')'
                                }}>
                                </div>
                                <p className='service-card-text'>{t('Services.Service4')}</p>
                            </div>
                        </NavLink>
                        <NavLink onClick={() => backToTop()} to='/services/scanning'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'url(' + BCards + ')'
                                }}>
                                </div>
                                <p className='service-card-text'>{t('Services.Service5')}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
