import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BiArrowBack } from 'react-icons/bi'
import Error from './Error'

export default function OrderCompleted() {

    const { t } = useTranslation()

    let Order = localStorage['Order'] || false
    Order = JSON.parse(Order)

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: 'oder-completed-container'
    }

    return (Order ?
        <div className='order-completed-view'>
            <motion.div {...motionProps}>
                <h2>{t('OrderCompleted.ThankYou')}</h2>
                <p>{t('OrderCompleted.Info')}</p>
                <div>
                    <p><span style={{ fontWeight: 'bold' }}>Valor:</span> {Order.Total}€</p>
                    <p><span style={{ fontWeight: 'bold' }}>NIB:</span> PT50 0033 0000 4534 1788 5440 5</p>
                </div>
                <Link to='/shop' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
            </motion.div>
        </div>
        :
        <Error />
    )
}
