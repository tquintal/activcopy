import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { backToTop } from '../utils'
import '../style/Services.css'

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
                    <NavLink onClick={() => backToTop()} to='/shop/visit-cards'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Shop.BusinessCardss')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/shop/t-shirts'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Shop.T-Shirts')}</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => backToTop()} to='/shop/flyers'>
                        <div className='service-card-container'>
                            <div className='service-card'>
                                <h3>*Icon/Image*</h3>
                            </div>
                            <p>{t('Shop.Flyers')}</p>
                        </div>
                    </NavLink>
                    <div className='services-bottom-container'>
                        <NavLink onClick={() => backToTop()} to='/shop/big-format'>
                            <div className='service-card-container'>
                                <div className='service-card'>
                                    <h3>*Icon/Image*</h3>
                                </div>
                                <p>{t('Shop.BigFormat')}</p>
                            </div>
                        </NavLink>
                        <NavLink onClick={() => backToTop()} to='/shop/mugs'>
                            <div className='service-card-container'>
                                <div className='service-card'>
                                    <h3>*Icon/Image*</h3>
                                </div>
                                <p>{t('Shop.Mugs')}</p>
                            </div>
                        </NavLink>
                        <NavLink onClick={() => backToTop()} to='/shop/stickers'>
                            <div className='service-card-container'>
                                <div className='service-card'>
                                    <h3>*Icon/Image*</h3>
                                </div>
                                <p>{t('Shop.Stickers')}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
