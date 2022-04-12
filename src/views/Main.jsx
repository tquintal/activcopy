import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Main() {
    const { t } = useTranslation()

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.div {...motionProps}>
            <div className='media' />
            <div className='description'>
                <div className='description-container white-space'>
                    <div>
                        <h1>{t('Description.Title')}</h1>
                        {
                            document.cookie === 'i18next=pt' ?
                                <>
                                    <p>
                                        {t('Description.Content_1')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_2')}</span>
                                        {t('Description.Content_3')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_4')}</span>
                                        {t('Description.Content_5')}
                                    </p>
                                    <p>
                                        {t('Description.Content_6')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_7')}</span>
                                    </p>
                                    <p>
                                        {t('Description.Content_8')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_9')}</span>
                                        {t('Description.Content_10')}
                                    </p>
                                    <p>
                                        {t('Description.Content_11')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_12')}</span>
                                        {t('Description.Content_13')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_14')}</span>
                                        {t('Description.Content_15')}</p>
                                    <p>{t('Description.Content_16')}</p>
                                    <p>{t('Description.Content_17')}</p>
                                </>
                                :
                                <>
                                    <p>{t('Description.Content_1')}</p>
                                    <p>{t('Description.Content_2')}</p>
                                    <span style={{ fontWeight: 'bold' }}>{t('Description.Content_3')}</span>
                                    {t('Description.Content_4')}
                                    <span style={{ fontWeight: 'bold' }}>{t('Description.Content_5')}</span>
                                    {t('Description.Content_6')}
                                    {t('Description.Content_7')}
                                    <span style={{ fontWeight: 'bold' }}>{t('Description.Content_8')}</span>
                                    {t('Description.Content_9')}
                                    <p>
                                        {t('Description.Content_10')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_11')}</span>
                                        {t('Description.Content_12')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_13')}</span>
                                        {t('Description.Content_14')}
                                        <span style={{ fontWeight: 'bold' }}>{t('Description.Content_15')}</span>
                                        {t('Description.Content_16')}
                                        {t('Description.Content_17')}
                                    </p>
                                    <p>{t('Description.Content_18')}</p>
                                </>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
