import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {

    const { t } = useTranslation()

    const date = new Date().getFullYear()

    return (
        <div className='footer'>
            <div className='footer-container'>
                <a className='footer-rights' href='https://github.com/tquintal/' target='_blank' rel='noopener noreferrer'>ACTIVCOPY © {date} - {t('Footer.Rights')}</a>
                <div className='social-container'>
                    <ReactTooltip />
                    <a href='https://www.facebook.com/activcopy/' target='_blank' rel='noopener noreferrer' data-tip='Facebook'>
                        <AiFillFacebook size='2em' className='social-icon' />
                    </a>
                    <a href='https://www.instagram.com/activcopy/' target='_blank' rel='noopener noreferrer' data-tip='Instagram'>
                        <AiFillInstagram size='2em' className='social-icon' />
                    </a>
                    <a href='https://www.linkedin.com/company/activcopy/' target='_blank' rel='noopener noreferrer' data-tip='LinkedIn'>
                        <AiFillLinkedin size='2em' className='social-icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}
