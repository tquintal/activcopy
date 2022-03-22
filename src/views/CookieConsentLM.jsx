import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'

export default function CookieConsentLM() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div className='thank-you-view-content' style={{ width: '80%' }}>
                <p className='white-space'>{t('CookieConsentLearnMorePage')}</p>
                <Link to='/' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
            </div>
        </div>
    )
}
