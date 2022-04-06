import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { motion } from 'framer-motion'
import { scrollTop, backToTop, enableScroll, disableScroll } from '../utils'
import { AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai'
import { MdHome, MdOutlineDesignServices, MdOutlineShoppingCart, MdMessage } from 'react-icons/md'
import PT from '../assets/pt.png'
import GB from '../assets/gb.png'
import { GrLanguage } from 'react-icons/gr'

function DesktopHeader() {

    const currentLanguageCode = cookies.get('i18next') || cookies.set('i18next', 'pt')

    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguageCode || 'pt'
    }, [currentLanguageCode])

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: 'desktop-header'
    }

    return (
        <motion.div {...motionProps}>
            <div className='header-container'>
                <Link to='/'><h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1></Link>
                <div className='header-actions'>
                    <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll() }} to='/'>
                        {t('Navigation.Home')}
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll() }} to='/services'>
                        {t('Navigation.Services')}
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll() }} to='/shop'>
                        {t('Navigation.Shop')}
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll() }} to='/contact' >
                        {t('Navigation.Contact')}
                    </NavLink>

                    <div className='dropdown'>
                        <button className='dropbtn'>{t('SelectLangTitle')}<GrLanguage size='1.5em' /></button>
                        <div className='dropdown-content'>
                            <div className='desktop-lang-option' onClick={() => i18next.changeLanguage('pt')}>
                                <img src={PT} alt='PT' />
                                <button className='lang-btn-desktop' disabled={currentLanguageCode === 'pt'}>Português</button>
                            </div>
                            <div className='desktop-lang-option' onClick={() => i18next.changeLanguage('en')} >
                                <img src={GB} alt='EN' />
                                <button className='lang-btn-desktop' disabled={currentLanguageCode === 'en'}>English</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export function MobileHeader() {

    const currentLanguageCode = cookies.get('i18next') || cookies.set('i18next', 'pt')

    const [mobileMenu, setMobileMenu] = useState(false)
    const showMobileMenu = () => setMobileMenu(!mobileMenu)

    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguageCode || 'pt'
    }, [currentLanguageCode])

    return (
        <>
            <div className='mobile-header'>
                <Link to='/'><h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1></Link>
                <AiOutlineMenu size='1.8em' onClick={() => { showMobileMenu(); disableScroll() }} />
            </div>
            <div className={mobileMenu ? 'mobile-menu enabled' : 'mobile-menu'}>
                <AiFillCloseSquare size='2.2em' onClick={() => { showMobileMenu(); enableScroll() }} className='mobile-menu-close-btn' />
                <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/'>
                    <MdHome />{t('Navigation.Home')}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/services'>
                    <MdOutlineDesignServices />{t('Navigation.Services')}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/shop'>
                    <MdOutlineShoppingCart />{t('Navigation.Shop')}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-navs header-actions-active' : 'header-navs'} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/contact'>
                    <MdMessage />{t('Navigation.Contact')}
                </NavLink>

                <div className='lang-div-mobile'>
                    <p>{t('ChangeLanguage')}</p>
                    <div className='lang-options'>
                        <div className='lang-btn' onClick={() => i18next.changeLanguage('pt')}>
                            <img src={PT} alt='PT' />
                            <p>PT</p>
                        </div>
                        <div className='lang-btn' onClick={() => i18next.changeLanguage('en')}>
                            <img src={GB} alt='GB' />
                            <p>EN</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export class Header extends React.Component {

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
            return (
                <MobileHeader />
            )
        } else {
            return (
                <DesktopHeader />
            )
        }

    }
}
