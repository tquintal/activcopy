import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'

export default function ThankYou() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div className='thank-you-view-content'>
                <h1>{t('ThankYou')}</h1>
                <NavLink to='/contact' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></NavLink>
            </div>
        </div>
    )
}
