import React, { useState } from 'react'
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
import image9 from './assets/img9.jpg'
import image10 from './assets/img10.jpg'

const style = {
    textAlign: 'center',
    height: '150px'
}

const prevArrow = <GrPrevious size='1.6em' className='arrow prev-arrow'></GrPrevious>
const nextArrow = <GrNext size='1.6em' className='arrow next-arrow'></GrNext>

const properties = {
    cssClass: 'slider-container',
    transitionDuration: 250,
    // infinite: true,
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
            'title': t('DigitalPrinting.FirstDPTitle'),
            'description': t('DigitalPrinting.FirstDPDesc')
        },
        {
            'img': image2,
            'title': t('DigitalPrinting.SecondDPTitle'),
            'description': t('DigitalPrinting.SecondDPDesc')
        },
        {
            'img': image3,
            'title': t('DigitalPrinting.ThirdDPTitle'),
            'description': t('DigitalPrinting.ThirdDPDesc')
        },
        {
            'img': image4,
            'title': t('DigitalPrinting.FourthDPTitle'),
            'description': t('DigitalPrinting.FourthDPDesc')
        },
        {
            'img': image5,
            'title': t('DigitalPrinting.FifthDPTitle'),
            'description': t('DigitalPrinting.FifthDPDesc')
        },
        {
            'img': image6,
            'title': t('DigitalPrinting.SixthDPTitle'),
            'description': t('DigitalPrinting.SixthDPDesc')
        },
        {
            'img': image7,
            'title': t('DigitalPrinting.SeventhDPTitle'),
            'description': t('DigitalPrinting.SeventhDPDesc')
        },
        {
            'img': image8,
            'title': t('DigitalPrinting.EighthDPTitle'),
            'description': t('DigitalPrinting.EighthDPDesc')
        },
        {
            'img': image9,
            'title': t('DigitalPrinting.NinthDPTitle'),
            'description': t('DigitalPrinting.NinthDPDesc')
        },
        {
            'img': image10,
            'title': t('DigitalPrinting.TenthDPTitle'),
            'description': t('DigitalPrinting.TenthDPDesc')
        }
    ]

    const [title, setTitle] = useState(images[0].title)
    const [description, setdescription] = useState(images[0].description)

    const ClickedService = (value) => {
        // console.table(value)
        setTitle(value.title)
        setdescription(value.description)
    }

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
                    <Slide {...properties}>
                        {images.map((each) =>
                            <div key={each.img} style={style} className='slider-image' onClick={ClickedService.bind(this, each)}>
                                <img src={each.img} alt={each.title} />
                                <p>{each.title}</p>
                            </div>
                        )}
                    </Slide>
                    <h1>{title}</h1>
                    <p className='service-description'>{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export class DigitalPrinting extends React.Component {

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
