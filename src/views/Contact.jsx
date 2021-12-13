import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Contact() {
    const { t } = useTranslation()
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
                    <p>*Maps*</p>
                </div>

                <div className='contact-form-container'>
                    <h1>{t('Form.Title')}</h1>
                    <div className='contact-form-first-block'>
                        <div>
                            <input placeholder={t('Form.Name')}></input>
                            <input placeholder='E-mail *'></input>
                        </div>
                        <div>
                            <input placeholder={t('Form.Contact')}></input>
                            <input placeholder={t('Form.Subject')}></input>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder={t('Form.TextArea')} className='message-textarea'></textarea>
                    </div>
                    <p>{t('Form.Info')}</p>
                    <button>{t('Form.Button')}</button>
                </div>
            </div>
        </motion.div>
    )
}
