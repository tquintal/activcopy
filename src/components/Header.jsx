import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai'
import { scrollTop, backToTop, enableScroll, disableScroll } from '../utils'

function DesktopHeader() {
    return (
        <div className='desktop-header'>
            <div className='header-container'>
                <h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1>
                <div className='header-actions'>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/'>início</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/services'>serviços</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll() }} to='/contact' >contactos</NavLink>
                    <div className='lang-div'>
                        <p>PT</p>
                        <p>EN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MobileHeader() {

    const [mobileMenu, setMobileMenu] = useState(false)
    const showMobileMenu = () => setMobileMenu(!mobileMenu)

    return (
        <>
            <div className='mobile-header'>
                <h1 className='title' onClick={() => { scrollTop(); enableScroll() }}>activcopy</h1>
                <AiOutlineMenu size='1.8em' onClick={() => { showMobileMenu(); disableScroll() }} />
            </div>
            <div className={mobileMenu ? 'mobile-menu enabled' : 'mobile-menu'}>
                <AiFillCloseSquare size='2.2em' onClick={() => { showMobileMenu(); enableScroll() }} className='mobile-menu-close-btn' />
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/'>início</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/services'>serviços</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'header-actions-active' : ''} onClick={() => { backToTop(); enableScroll(); showMobileMenu() }} to='/contact'>contactos</NavLink>
                <div className='lang-div-mobile'>
                    <p>PT</p>
                    <p>EN</p>
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
