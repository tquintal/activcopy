import React from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'

export default function Footer() {

    const { t } = useTranslation()

    return (
        <div className='footer'>
            <div className='footer-container'>
                <a className='footer-rights' href='https://github.com/tquintal/' target='_blank' rel='noopener noreferrer'>ACTIVCOPY © 2021 - {t('Footer.Rights')}</a>
                {/* <p>ACTIVCOPY © 2021 - {t('Footer.Rights')}</p> */}
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
