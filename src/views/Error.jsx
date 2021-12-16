import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Error() {
    const { t } = useTranslation()
    return (
        <div className='error-view'>
            <div>
                <h2>{t('Error')}</h2>
                <br />
                <Link to='/'><button>{t('ErrorBtn')}</button></Link>
            </div>
        </div>
    )
}
