import React from 'react'
import { NavLink } from 'react-router-dom'
import { backToTop } from '../../utils'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BCards from './assets/5.1.jpg'
import ServiceBack from '../../components/ServiceBack'
import { CgEnter } from 'react-icons/cg'

export default function Scanning() {

    const { t } = useTranslation()

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.div {...motionProps}>
            <div className='service'>
                <div className='service-container'>
                    <ServiceBack />
                    <div className='scanning-image-container' style={{
                        backgroundImage: 'linear-gradient(45deg, #181818a8, #0000005c), url(' + BCards + ')'
                    }}>
                    </div>
                    <div>
                        <h1 className='service-title'>{t('Scanning.SCTitle')}</h1>
                        <p className='service-description'>{t('Scanning.SCDesc')}</p>
                    </div>
                    <NavLink className='service-contact-link' to='/contact' onClick={backToTop}><button className='service-button'>{t('ButtonBudget')}<CgEnter size='1.5em' /></button></NavLink>
                </div>
            </div>
        </motion.div>
    )
}
