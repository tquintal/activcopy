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
import image4 from './assets/img4.jpg'
import image5 from './assets/img5.jpg'
import image6 from './assets/img6.jpg'
import image7 from './assets/img7.jpg'
import image8 from './assets/img8.jpg'

import { MdOutlineShoppingCart } from 'react-icons/md'

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
    nextArrow: nextArrow
}

function Content() {

    const { t } = useTranslation()

    const images = [
        {
            'img': image1,
            'title': t('BigFormat.FirstBFTitle'),
            'description': t('BigFormat.FirstBFDesc')
        },
        {
            'img': image2,
            'title': t('BigFormat.SecondBFTitle'),
            'description': t('BigFormat.SecondBFDesc')
        },
        {
            'img': image3,
            'title': t('BigFormat.ThirdBFTitle'),
            'description': t('BigFormat.ThirdBFDesc')
        },
        {
            'img': image4,
            'title': t('BigFormat.FourthBFTitle'),
            'description': t('BigFormat.FourthBFDesc')
        },
        {
            'img': image5,
            'title': t('BigFormat.FifthBFTitle'),
            'description': t('BigFormat.FifthBFDesc')
        },
        {
            'img': image6,
            'title': t('BigFormat.SixthBFTitle'),
            'description': t('BigFormat.SixthBFDesc')
        },
        {
            'img': image7,
            'title': t('BigFormat.SeventhBFTitle'),
            'description': t('BigFormat.SeventhBFDesc')
        },
        {
            'img': image8,
            'title': t('BigFormat.EighthBFTitle'),
            'description': t('BigFormat.EighthBFDesc')
        }
    ]

    const [title, setTitle] = useState(images[0].title)
    const [description, setdescription] = useState(images[0].description)

    const ClickedService = (value) => {
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
                    <h1 className='service-title'>{t('Services.Service2')}</h1>
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
                    </div>
                    <p className='big-format-info'>{t('BigFormat.Info')}</p>
                    <NavLink className='service-contact-link' to='/shop/big-format' onClick={backToTop}><button className='service-button'>Comprar online<MdOutlineShoppingCart size='1.5em' /></button></NavLink>
                </div>
            </div>
        </motion.div>
    )
}

export class BigFormat extends React.Component {

    constructor() {
        super()
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth })
    }

    render() {

        const { width } = this.state
        if (width <= 1100) {
            properties.slidesToShow = 3
            properties.slidesToScroll = 3
        } else {
            properties.slidesToShow = 6
            properties.slidesToScroll = 6
        }

        return (
            <Content />
        )
    }

}
