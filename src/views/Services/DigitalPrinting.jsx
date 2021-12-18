import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
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
    {
        'img': image7,
        'desc': 'Image 7'
    },
    {
        'img': image8,
        desc: 'Image 8'
    },
    {
        'img': image9,
        desc: 'Image 9'
    },
    {
        'img': image10,
        desc: 'Image 10'
    }
]

const style = {
    textAlign: 'center',
    height: '150px'
}

const properties = {
    cssClass: 'slider-container',
    transitionDuration: 250,
    infinite: true,
    indicators: true,
    autoplay: false
}

function Content() {
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
                    <Slide {...properties}>
                        {images.map((each) => <div key={each.desc} style={style} className='slider-image'><img src={each.img} alt={each.desc} /><p>{each.desc}</p></div>)}
                    </Slide>
                    <p>{t('Description.Content')}</p>
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
            properties.slidesToShow = 5
            properties.slidesToScroll = 5
        }
        return (
            <Content />
        )

    }

}
