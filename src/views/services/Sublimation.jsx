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
    slidesToShow: 3,
    slidesToScroll: 3,
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
            'description': ''
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
        setID(value.id)
        setTitle(value.title)
        setdescription(value.description)
    }

    const LinkTo = () => {
        switch (id) {
            case 1:
                return <NavLink className='service-contact-link' to='/shop/t-shirts' onClick={backToTop}><button className='service-button'>{t('ButtonShop')}<MdOutlineShoppingCart size='1.5em' /></button></NavLink>
            case 2:
                return <NavLink className='service-contact-link' to='/shop/mugs' onClick={backToTop}><button className='service-button'>{t('ButtonShop')}<MdOutlineShoppingCart size='1.5em' /></button></NavLink>
            default:
                return <NavLink className='service-contact-link' to='/contact' onClick={backToTop}><button className='service-button'>{t('ButtonBudget')}<CgEnter size='1.5em' /></button></NavLink>
        }
    }

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const CGuiderAll = () => { return (<><span style={{ color: '#000000', fontWeight: 'bold' }}> * </span><span style={{ color: '#00E0D4', fontWeight: 'bold' }}>* </span><span style={{ color: '#FF4500', fontWeight: 'bold' }}>*</span></>) }
    const CGuiderAdult = () => { return (<><span style={{ color: '#000000', fontWeight: 'bold' }}> * </span></>) }
    const CGuiderOrganic = () => { return (<><span style={{ color: '#00E0D4', fontWeight: 'bold' }}> * </span></>) }
    const CGuiderAdultChild = () => { return (<><span style={{ color: '#000000', fontWeight: 'bold' }}> * </span><span style={{ color: '#FF4500', fontWeight: 'bold' }}>*</span></>) }
    const CGuiderChild = () => { return (<><span style={{ color: '#FF4500', fontWeight: 'bold' }}> * </span></>) }
    const CGuiderChildOrganic = () => { return (<><span style={{ color: '#00E0D4', fontWeight: 'bold' }}>* </span><span style={{ color: '#FF4500', fontWeight: 'bold' }}>*</span></>) }

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
                    <div className='service-desc-container'>
                        <h1 className='service-title'>{title}</h1>
                        <p className='service-description'>{description}</p>
                        {id === 1 ? (
                            <div>
                                <p className='service-description' style={{ marginTop: '15px' }}><span style={{ color: '#000000', fontWeight: 'bold' }}>* </span>{t('Sublimation.FirstSMTShirt')}</p>
                                <p className='service-description'><span style={{ color: '#00E0D4', fontWeight: 'bold' }}>* </span>{t('Sublimation.SecondSMTShirt')}</p>
                                <p className='service-description'><span style={{ color: '#FF4500', fontWeight: 'bold' }}>* </span>{t('Sublimation.ThirdSMTShirt')}</p>


                                <div className='tshirt-container'>
                                    <p className='service-description' style={{ fontWeight: 'bold' }}>{t('Sublimation.FirstSMTShirtColorTitle')}</p>
                                    <div className='colors-container'>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#ffffff', border: '1px', borderColor: '#000000', borderStyle: 'solid' }}></div><p>Branco</p><CGuiderAll /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#000000' }}></div><p>Preto</p><CGuiderAll /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#4f4f4f' }}></div><p>Cinzento Escuro</p><CGuiderAll /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#a4a4a4' }}></div><p>Cinzento Claro</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#eeeeee' }}></div><p>Ash</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#3d3331' }}></div><p>Castanho</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#6c4f3f' }}></div><p>Moca</p><CGuiderOrganic /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#d0bc9e' }}></div><p>Sand</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#572D2D' }}></div><p>Bordô</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#b20000' }}></div><p>Vermelho Escuro</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#e40000' }}></div><p>Vermelho</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#f96414' }}></div><p>Laranja</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#fec32d' }}></div><p>Gold</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#ffe94e' }}></div><p>Amarelo Solar</p><CGuiderChildOrganic /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#45483a' }}></div><p>Urban Khaiki</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#2d4733' }}></div><p>Verde Garrafa</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#0e8764' }}></div><p>Verde Escuro</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#569c54' }}></div><p>Real Green</p><CGuiderChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#9ac33e' }}></div><p>Verde</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#96af69' }}></div><p>Pistachio</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#1f2532' }}></div><p>Navy</p><CGuiderAll /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#101144' }}></div><p>Urban Navy</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#0f3c83' }}></div><p>Azul Cobalto</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#164e8d' }}></div><p>Royal Blue</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#07697d' }}></div><p>Diva Blue</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#1098a8' }}></div><p>Azul Turquesa</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#109ec9' }}></div><p>Atol</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#aec9e2' }}></div><p>Azul Céu</p><CGuiderAdultChild /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#a6b7c2' }}></div><p>Blue Fog</p><CGuiderOrganic /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#29094c' }}></div><p>Roxo</p><CGuiderAdult /></div>
                                        <div className='color-content'><div className='tshirt-color' style={{ backgroundColor: '#e14a72' }}></div><p>Rosa</p><CGuiderAdultChild /></div>
                                    </div>
                                </div>
                                <p>{t('Sublimation.FirstSMDesc')}</p>
                                <p>{t('Sublimation.FirstSMDesc2')}</p>
                                <p>{t('Sublimation.FourthSMTShirt')}</p>
                                <p>{t('Sublimation.FithSMTShirt')}</p>
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
        return (
            <Content />
        )
    }

}
