import React from 'react'
import { motion } from 'framer-motion'

export default function Services(props) {
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='services-container'
        >
            <h2>... SERVIÇOS</h2>
        </motion.div>
    )
}
