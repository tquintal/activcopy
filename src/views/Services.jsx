import React from 'react'
import { motion } from 'framer-motion'

export default function Services(props) {
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='services'
        >
            <div className='services-container'>
                <h1>Serviços</h1>
                <div className='services-cards-container'>
                    <div className='service-card'>
                        <h2>1</h2>
                    </div>
                    <div className='service-card'>
                        <h2>2</h2>
                    </div>
                    <div className='service-card'>
                        <h2>3</h2>
                    </div>
                    <div className='service-card'>
                        <h2>4</h2>
                    </div>
                    <div className='service-card'>
                        <h2>5</h2>
                    </div>
                    <div className='service-card'>
                        <h2>6</h2>
                    </div>
                    <div className='service-card'>
                        <h2>7</h2>
                    </div>
                    <div className='service-card'>
                        <h2>8</h2>
                    </div>
                    <div className='service-card'>
                        <h2>9</h2>
                    </div>
                    <div className='service-card'>
                        <h2>10</h2>
                    </div>
                    <div className='service-card'>
                        <h2>11</h2>
                    </div>
                    <div className='service-card'>
                        <h2>12</h2>
                    </div>
                    <div className='service-card'>
                        <h2>13</h2>
                    </div>
                    <div className='service-card'>
                        <h2>14</h2>
                    </div>
                    <div className='service-card'>
                        <h2>15</h2>
                    </div>
                    <div className='service-card'>
                        <h2>16</h2>
                    </div>
                    <div className='service-card'>
                        <h2>17</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
