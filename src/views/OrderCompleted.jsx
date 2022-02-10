import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'
import Error from './Error'

export default function OrderCompleted() {

    const { t } = useTranslation()

    let Order = localStorage['Order'] || false
    Order = JSON.parse(Order)
    console.log(Order)

    return (Order ?
        <div className='order-completed-view'>
            <div className='oder-completed-container'>
                <h2>Obrigado pela preferência! :)</h2>
                <div className='order-confirm'>
                    <p>Para concluir a sua encomenda deverá efetuar uma transferência para:</p>
                    <p>Dados: XXX XXX XXX XXX XXX</p>
                    <p>Dados 2: XXX XXX XXX XXX XXX</p>
                    <p>Valor: {Order.Total}</p>
                </div>
                <div className='order-details'>
                    <p>Detalhes da encomenda:</p>
                    <p>{t('ShopBusinessCards.Format')}: {Order.Format}</p>
                    <p>{t('ShopBusinessCards.Material')}: {Order.Material}</p>
                    <p>{t('ShopBusinessCards.Printing')}: {Order.Printing}</p>
                    <p>{t('ShopBusinessCards.PrintingColor')}: {Order.PrintingColor}</p>
                    <p>{t('ShopBusinessCards.File')}: {Order.File}</p>
                    <p>{t('ShopBusinessCards.Amount')}: {Order.Amount}</p>

                </div>
                <div className='contact-details'>
                    <p>Detalhes de contacto:</p>
                    <p>E-mail: {Order.EMail}</p>
                    <p>{t('ShopBusinessCards.Contact')}: {Order.Contact}</p>
                    <p>{t('ShopBusinessCards.Address')}: {Order.Address}</p>
                    <p>{t('ShopBusinessCards.File')}: {Order.File}</p>
                    <p>{t('ShopBusinessCards.Total')}: {Order.Total}</p>
                </div>
                <div className='order-completed-bottom'>
                    <Link to='/' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                    <button onClick={window.print} className='order-completed-btn'>Guardar detalhes</button>
                </div>
            </div>
        </div> :
        <Error />
    )
}
