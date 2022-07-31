import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Contact() {

    const { t } = useTranslation()

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: 'contact'
    }

    return (
        <motion.div {...motionProps}>
            <div className='contact-container'>

                <div className='contacts-container'>
                    <div>
                        <h1>{t('Contact.Title')}</h1>
                        <p><span>E-mail:</span> activcopy@netcabo.pt</p>
                        <p><span>{t('Contact.Phone')}</span> 234 383 210</p>
                    </div>
                    <div>
                        <h1>{t('Schedule.Title')}</h1>
                        <p><span>{t('Schedule.Weekdays')}</span> 9h - 13h | 14h - 19h</p>
                        <p><span>{t('Schedule.Saturday')}</span> 9h - 13h | 14h - 18h</p>
                        <p><span>{t('Schedule.Sunday')}</span> {t('Schedule.Closed')}</p>
                    </div>
                    <a href='https://goo.gl/maps/fHBZvZBNSNqaLuic8' target='_blank' rel='noopener noreferrer'>
                        <div>
                            <h1>{t('Address.Title')}</h1>
                            <p>Rua Dr. Mário Sacramento</p>
                            <p>Nº49, 3810-106 Aveiro</p>
                        </div>
                    </a>
                </div>

                <a href='https://goo.gl/maps/fHBZvZBNSNqaLuic8' target='_blank' rel='noopener noreferrer'>
                    <div className='maps' />
                </a>

                <form method='POST' action='https://formsubmit.co/seractivcopy@hotmail.com' encType='multipart/form-data' className='contact-form-container'>
                    <input type='hidden' name='_subject' value='Nova mensagem em ACTIVCOPY.PT'></input>
                    <h1 style={{ lineHeight: '35px' }}>{t('Form.Title')}</h1>
                    <div className='contact-form-first-block'>
                        <div>
                            <input type='text' name='Nome' placeholder={t('Form.Name')} required></input>
                            <input type='email' name='E-Mail' placeholder='E-mail *' required></input>
                        </div>
                        <div>
                            <input type='text' name='Contacto' placeholder={t('Form.Contact')}></input>
                            <input type='text' name='Assunto' placeholder={t('Form.Subject')} required></input>
                        </div>
                    </div>
                    <label className='contact-form-attachment'>
                        <div>
                            Carregar imagem <span className='shop-attachment-img'>(1mb máx)</span> ou link <span className='shop-attachment-img'>(opcional)</span>
                        </div>
                        <input type='file' name='Anexo' accept='.zip, .tar, .7z, audio/*, video/*, image/*'></input>
                        <input type='url' name='Link' placeholder='Link (ex: wetransfer)'></input>
                    </label>
                    <textarea name='Mensagem' placeholder={t('Form.TextArea')} className='message-textarea' required />
                    <p>{t('Form.Info')}</p>
                    <button type='submit'>{t('Form.Button')}</button>
                    <input type='hidden' name='_next' value='http://activcopy.pt/thank-you' />
                </form>
            </div>
        </motion.div>
    )
}
