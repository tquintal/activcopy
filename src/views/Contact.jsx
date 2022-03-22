import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Contact() {

    const { t } = useTranslation()

    const GMaps = () => {
        return (
            <iframe title='gmaps' loading='lazy' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8706336730497!2d-8.650415584282392!3d40.63273485039732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2a7cfadcd45%3A0xefd5c61c56e936b0!2sActivcopy!5e0!3m2!1spt-PT!2spt!4v1639739940482!5m2!1spt-PT!2spt'></iframe>
        )
    }

    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='contact'
        >
            <div className='contact-container'>

                <div className='contacts-container'>
                    <div>
                        <h1>{t('Contact.Title')}</h1>
                        <p><span>E-mail:</span> geral@activcopy.pt</p>
                        <p><span>{t('Contact.Budgets')}</span> activcopy.orcamentos@gmail.com</p>
                        <p><span>{t('Contact.Phone')}</span> 234 383 210</p>
                    </div>
                    <div>
                        <h1>{t('Schedule.Title')}</h1>
                        <p><span>{t('Schedule.Weekdays')}</span> 8H30 - 20H00</p>
                        <p><span>{t('Schedule.Saturday')}</span> 9H00 - 19H00</p>
                        <p><span>{t('Schedule.Sunday')}</span> 9H00 - 19H00</p>
                    </div>
                    <div>
                        <h1>{t('Address.Title')}</h1>
                        <p>Rua Dr. Mário Sacramento</p>
                        <p>Nº49, 3810-106 Aveiro</p>
                    </div>
                </div>

                <div className='maps'>
                    <GMaps />
                </div>

                <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='contact-form-container'>
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
                    <textarea name='Mensagem' placeholder={t('Form.TextArea')} className='message-textarea' required />
                    {/* <label>
                        {t('ShopBusinessCards.UploadFile')}
                    </label> */}
                    <input type='file' name='Attachment' accept='.zip, .tar, .7z, audio/*, video/*, image/*'></input>
                    <p>{t('Form.Info')}</p>
                    <button type='submit'>{t('Form.Button')}</button>
                    <input type='hidden' name='_next' value='https://activcopy.vercel.app/thank-you' />
                </form>
            </div>
        </motion.div>
    )
}
