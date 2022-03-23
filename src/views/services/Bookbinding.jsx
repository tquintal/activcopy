import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { backToTop } from '../../utils'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GrPrevious, GrNext } from 'react-icons/gr'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import ServiceBack from '../../components/ServiceBack'

import image1 from './assets/img1.jpg'
import image2 from './assets/img2.jpg'
import image3 from './assets/img3.jpg'

import { CgEnter } from 'react-icons/cg'

const prevArrow = <GrPrevious size='1.6em' className='arrow prev-arrow'></GrPrevious>
const nextArrow = <GrNext size='1.6em' className='arrow next-arrow'></GrNext>

const properties = {
    cssClass: 'slider-container',
    transitionDuration: 250,
    infinite: false,
    indicators: false,
    autoplay: false,
    canSwipe: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    slidesToShow: 3,
    slidesToScroll: 3
}

export default function Bookbinding() {

    const { t } = useTranslation()

    const images = [
        {
            'id': 1,
            'img': image1,
            'title': t('Bookbinding.FirstBBTitle'),
            'description': t('Bookbinding.FirstBBDesc')
        },
        {
            'id': 2,
            'img': image2,
            'title': t('Bookbinding.SecondBBTitle'),
            'description': t('Bookbinding.SecondBBDesc')
        },
        {
            'id': 3,
            'img': image3,
            'title': t('Bookbinding.ThirdBBTitle'),
            'description': t('Bookbinding.ThirdBBDesc')
        }
    ]

    const [id, setID] = useState(images[0].id)
    const [title, setTitle] = useState(images[0].title)
    const [description, setdescription] = useState(images[0].description)

    const ClickedService = (value) => {
        setID(value.id)
        setTitle(value.title)
        setdescription(value.description)
    }

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.div {...motionProps}>
            <div className='service'>
                <div className='service-container'>
                    <ServiceBack />
                    <h1 className='service-title'>{t('Services.Service4')}</h1>
                    <Slide {...properties}>
                        {images.map((each) =>
                            <div key={each.img} className='slider-image slide' onClick={ClickedService.bind(this, each)}>
                                <img src={each.img} alt={each.title} />
                                <p>{each.title}</p>
                            </div>
                        )}
                    </Slide>
                    <div>
                        <h1 className='service-title'>{title}</h1>
                        <p className='service-description'>{description}</p>
                        {id === 1 ? (
                            <div className='bbfirstservice'>
                                <p>{t('Bookbinding.FirstBBTShirtColorTitle')}</p>
                                <div className='bbfirstservice-colors'>
                                    <div className='tshirt-color' style={{ backgroundColor: '#292527' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#ededed' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#1f2532' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#b6142b' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#101144' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#0f3c83' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#d0bc9e' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#3d3331' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#ffe94e' }}></div>
                                    <div className='tshirt-color' style={{ backgroundColor: '#fec32d' }}></div>
                                </div>
                            </div>
                        ) : (<></>)}

                    </div>
                    <NavLink className='service-contact-link' to='/contact' onClick={backToTop}><button className='service-button'>{t('ButtonBudget')}<CgEnter size='1.5em' /></button></NavLink>
                </div>
            </div>
        </motion.div>
    )
}
