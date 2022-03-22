import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { backToTop } from '../utils'
import '../style/Services.css'
import BCards from '../assets/b-cards.jpg'
import TShirts from '../assets/t-shirts.jpg'
import Flyers from '../assets/flyers.jpg'
import BFormat from '../assets/b-format.jpg'
import Mugs from '../assets/mug.jpg'

export default function Shop() {
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
                <div className='shop-title'>
                    <h1>{t('Shop.Title')}</h1>
                    <MdOutlineShoppingCart size='2em' />
                </div>
                <div className='services-cards-container'>
                    <NavLink onClick={() => backToTop()} to='/shop/business-cards'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + BCards + ')'
                            }}>
                                <h3>{t('Shop.BusinessCardss')}</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/shop/t-shirts'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + TShirts + ')'
                            }}>
                                <h3>{t('Shop.T-Shirts')}</h3>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/shop/flyers'>
                        <div className='service-card-container'>
                            <div className='service-card' style={{
                                backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + Flyers + ')'
                            }}>
                                <h3>{t('Shop.Flyers')}</h3>
                            </div>
                        </div>
                    </NavLink>
                    <div className='services-bottom-container'>
                        <NavLink onClick={() => backToTop()} to='/shop/big-format'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + BFormat + ')'
                                }}>
                                    <h3>{t('Shop.BigFormat')}</h3>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink onClick={() => backToTop()} to='/shop/mugs'>
                            <div className='service-card-container'>
                                <div className='service-card' style={{
                                    backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + Mugs + ')'
                                }}>
                                    <h3>{t('Shop.Mugs')}</h3>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
