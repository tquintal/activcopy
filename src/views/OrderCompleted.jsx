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
                <Link to='/shop' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                {/* <div className='order-confirm'>
                    <p>{t('OrderCompleted.Complete')}</p>
                    <p>{t('OrderCompleted.IBAN')} XXX XXX XXX XXX XXX</p>
                    <p>{t('OrderCompleted.Cenas')} XXX XXX XXX XXX XXX</p>
                    <p>{t('OrderCompleted.Total')} {Order.Total}</p>
                </div>
                <div className='order-details'>
                    <p>{t('OrderCompleted.OrderDetails')}</p>
                    <p>{t('ShopBusinessCards.Format')}: {Order.Format}</p>
                    <p>{t('ShopBusinessCards.Material')}: {Order.Material}</p>
                    <p>{t('ShopBusinessCards.Printing')}: {Order.Printing}</p>
                    <p>{t('ShopBusinessCards.PrintingColor')}: {Order.PrintingColor}</p>
                    <p>{t('ShopBusinessCards.File')}: {Order.File}</p>
                    <p>{t('ShopBusinessCards.Amount')}: {Order.Amount}</p>
                    <p>{t('ShopBusinessCards.Total')}: {Order.Total}</p>
                </div>
                <div className='contact-details'>
                    <p>{t('OrderCompleted.ContactDetails')}</p>
                    <p>E-mail: {Order.EMail}</p>
                    <p>{t('ShopBusinessCards.Contact')}: {Order.Contact}</p>
                    <p>{t('ShopBusinessCards.Address')}: {Order.Address}</p>
                </div>
                <div className='order-completed-bottom'>
                    <Link to='/shop' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                    <button onClick={() => alert('Not available yet')} className='order-completed-btn'>{t('OrderCompleted.SaveOrder')}</button>
                </div> */}
            </motion.div>
        </div>
        :
        <Error />
    )
}
