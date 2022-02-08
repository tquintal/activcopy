import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'
import { backToTop } from '../utils'

export default function ServiceBack() {
    const { t } = useTranslation()
    return (
        <NavLink onClick={() => backToTop()} to='/shop' className='service-back'>
            <BiArrowBack />
            <p>{t('Service.Back')}</p>
        </NavLink>
    )
}
