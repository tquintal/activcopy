import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ServiceBack from '../../components/ServiceBack'
import image1 from './assets/img1.jpg'
import image2 from './assets/img2.jpg'
import image3 from './assets/img3.jpg'
import image4 from './assets/img4.jpg'
import image5 from './assets/img5.jpg'
import image6 from './assets/img6.jpg'
// import image7 from './assets/img7.jpg'
// import image8 from './assets/img8.jpg'
// import image9 from './assets/img9.jpg'
// import image10 from './assets/img10.jpg'

const images = [
    {
        'img': image1,
        'desc': 'Image 1'
    },
    {
        'img': image2,
        'desc': 'Image 2'
    },
    {
        'img': image3,
        'desc': 'Image 3'
    },
    {
        'img': image4,
        'desc': 'Image 4'
    },
    {
        'img': image5,
        'desc': 'Image 5'
    },
    {
        'img': image6,
        'desc': 'Image 6'
    },
]

export default function DigitalPrinting() {
    const { t } = useTranslation()
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='service'>
                <div className='service-container'>
                    <ServiceBack />
                    <h1>{t('Services.Service1')}</h1>
                    <div className='digital-printing-container'>
                        {
                            images.map((each, index) => <div><img key={index} src={each.img} alt={each.desc} /><p>{each.desc}</p></div>)
                        }
                    </div>
                    <p>{t('Description.Content')}</p>
                </div>
            </div>
        </motion.div>
    )
}
