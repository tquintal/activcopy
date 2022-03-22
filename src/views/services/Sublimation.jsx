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

import { CgEnter } from 'react-icons/cg'
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
            'id': 1,
            'img': image1,
            'title': t('Sublimation.FirstSMTitle'),
            'description': t('Sublimation.FirstSMDesc')
        },
        {
            'id': 2,
            'img': image2,
            'title': t('Sublimation.SecondSMTitle'),
            'description': t('Sublimation.SecondSMDesc')
        },
        {
            'id': 3,
            'img': image3,
            'title': t('Sublimation.ThirdSMTitle'),
            'description': t('Sublimation.ThirdSMDesc')
        },
        {
            'id': 4,
            'img': image4,
            'title': t('Sublimation.FourthSMTitle'),
            'description': t('Sublimation.FourthSMDesc')
        },
        {
            'id': 5,
            'img': image5,
            'title': t('Sublimation.FifthSMTitle'),
            'description': t('Sublimation.FifthSMDesc')
        },
        {
            'id': 6,
            'img': image6,
            'title': t('Sublimation.SixthSMTitle'),
            'description': t('Sublimation.SixthSMDesc')
        },
        {
            'id': 7,
            'img': image7,
            'title': t('Sublimation.SeventhSMTitle'),
            'description': t('Sublimation.SeventhSMDesc')
        }
    ]

    const [id, setID] = useState(images[0].id)
    const [title, setTitle] = useState(images[0].title)
    const [description, setdescription] = useState(images[0].description)

    const ClickedService = (value) => {
        console.log('ID:', value.id)

        setID(value.id)
        setTitle(value.title)
        setdescription(value.description)
    }

    const LinkTo = () => {
        switch (id) {
            case 1:
                return <NavLink className='service-contact-link' to='/shop/t-shirts' onClick={backToTop}><button className='service-button'>Comprar online<MdOutlineShoppingCart size='1.5em' /></button></NavLink>
            case 2:
                return <NavLink className='service-contact-link' to='/shop/mugs' onClick={backToTop}><button className='service-button'>Comprar online<MdOutlineShoppingCart size='1.5em' /></button></NavLink>
            default:
                return <NavLink className='service-contact-link' to='/contact' onClick={backToTop}><button className='service-button'>Pedir orçamento <CgEnter size='1.5em' /></button></NavLink>
        }
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
                    <h1 className='service-title'>{t('Services.Service3')}</h1>
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
                            <div>
                                <p className='service-description' style={{ marginTop: '15px' }}>{t('Sublimation.FirstSMTShirt')}</p>
                                <div className='tshirt-container'>
                                    <p className='service-description'>{t('Sublimation.FirstSMTShirtColorTitle')}</p>
                                    <div className='colors-container'>
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

                                        <div className='tshirt-color' style={{ backgroundColor: '#f96414' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#e14a72' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#29094c' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#5d2a37' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#8cb2d7' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#b2002a' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#109ec9' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#07697d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#164e8d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#96af69' }}></div>

                                        <div className='tshirt-color' style={{ backgroundColor: '#9ac33e' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#0e8764' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#45483a' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#2d4733' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#f0f0ef' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#979797' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#4b4a50' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#1098a8' }}></div>
                                    </div>
                                </div>

                                <p className='service-description'>{t('Sublimation.SecondSMTShirt')}</p>
                                <div className='tshirt-container'>
                                    <p className='service-description'>{t('Sublimation.FirstSMTShirtColorTitle')}</p>
                                    <div className='colors-container'>
                                        <div className='tshirt-color' style={{ backgroundColor: '#1f2532' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#f5efe3' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#6c4f3f' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ffdf5d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#070508' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#a6b7c2' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#433f42' }}></div>
                                    </div>
                                </div>

                                <p className='service-description'>{t('Sublimation.ThirdSMTShirt')}</p>
                                <div className='tshirt-container'>
                                    <p className='service-description'>{t('Sublimation.FirstSMTShirtColorTitle')}</p>
                                    <div className='colors-container'>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ffffff', border: '1px', borderColor: '#000000', borderStyle: 'solid' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#292527' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#1f2532' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#b6142b' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#fea722' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#fec32d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#f96414' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#e14a72' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#5d2a37' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#8cb2d7' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#109ec9' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#164e8d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#0e8764' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#2d4733' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#979797' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#569c54' }}></div>
                                    </div>
                                </div>

                                <p className='service-description'>{t('Sublimation.FourthSMTShirt')}</p>
                                <div className='tshirt-container'>
                                    <p className='service-description'>{t('Sublimation.FirstSMTShirtColorTitle')}</p>
                                    <div className='colors-container'>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ffffff', border: '1px', borderColor: '#000000', borderStyle: 'solid' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#9f97c6' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#005995' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#55722f' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#0069b8' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#be9e4e' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#131313' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#d2828f' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#002d69' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#63432c' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#cde400' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#b7b5a9' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#d6ca9a' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#bc708a' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#111926' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#2c1f16' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#22be36' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#dfd4ac' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#d1b79c' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#972547' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#8ab237' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#6e4e15' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ff4c00' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#d4c96d' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#7a1233' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#89b136' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#714e14' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#fe4d00' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#d3ca6b' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#7a1233' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#5c9101' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#515352' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ea1736' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#c9b400' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#45111e' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#054837' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#94958f' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#f3217c' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#0f1015' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#dda700' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#005e77' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#511881' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#980003' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#da8f02' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#013a55' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#ab9752' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#bc3b01' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#9db7ce' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#282c1e' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#98000c' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#5784ad' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#5784ad' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#74000f' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#384e76' }}></div>
                                        <div className='tshirt-color' style={{ backgroundColor: '#65a283' }}></div>
                                    </div>
                                </div>
                                <p className='service-description'>{t('Sublimation.FithSMTShirt')}</p>
                            </div>
                        ) : (<></>)}
                    </div>
                    <LinkTo />
                </div>
            </div>
        </motion.div>
    )
}

export class Sublimation extends React.Component {

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
