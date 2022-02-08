import React from 'react'
// import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'

export default function Mugs() {

    // const { t } = useTranslation()

    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='service'>
                <div className='service-container'>
                    <ShopBack />
                    <h1>T-Shirts</h1>
                </div>
            </div>
        </motion.div>
    )
}
