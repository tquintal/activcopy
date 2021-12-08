import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <p>ACTIVCOPY © 2021 - Todos os direitos reservados</p>
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
