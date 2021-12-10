import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { scrollTop, backToTop, enableScroll, disableScroll } from '../utils'
import { AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'

function DesktopHeader() {

    const currentLanguageCode = cookies.get('i18next') || cookies.set('i18next', 'pt')

    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguageCode || 'pt'
    }, [currentLanguageCode])

    return (
        <div className='desktop-header'>
            <div className='header-container'>
                <h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1>
                <div className='header-actions'>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/'>{t('Navigation.Home')}</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/services'>{t('Navigation.Services')}</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/contact' >{t('Navigation.Contact')}</NavLink>

                    <GrLanguage size='1.2em' />
                    <button className='lang-btn' onClick={() => i18next.changeLanguage('pt')} disabled={currentLanguageCode === 'pt'}>Portuguese</button>
                    <button className='lang-btn' onClick={() => i18next.changeLanguage('en')} disabled={currentLanguageCode === 'en'}>English</button>

                </div>
            </div>
        </div>
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
                <h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1>
                <AiOutlineMenu size='1.8em' onClick={() => { showMobileMenu(); disableScroll() }} />
            </div>
            <div className={mobileMenu ? 'mobile-menu enabled' : 'mobile-menu'}>
                <AiFillCloseSquare size='2.2em' onClick={() => { showMobileMenu(); enableScroll() }} className='mobile-menu-close-btn' />
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/'>{t('Navigation.Home')}</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/services'>{t('Navigation.Services')}</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/contact'>{t('Navigation.Contact')}</NavLink>
                <div className='lang-div-mobile'>
                    <p onClick={() => i18next.changeLanguage('pt')}>PT</p>
                    <p onClick={() => i18next.changeLanguage('en')}>EN</p>
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
