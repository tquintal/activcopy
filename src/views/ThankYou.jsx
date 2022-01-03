import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ThankYou() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div>
                <h1>{t('ThankYou')}</h1>
                <br />
                <Link to='/contact'><button>{t('ThankYouBtn')}</button></Link>
            </div>
        </div>
    )
}
