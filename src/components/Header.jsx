import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai'
import { scrollTop, enableScroll, disableScroll } from '../utils'

const defaultState = () => {
    scrollTop()
    enableScroll()
}

function DesktopHeader() {
    return (
        <div className='desktop-header'>
            <div className='header-container'>
                <Link to='/' onClick={() => { defaultState() }}>
                    <h1 className='title'>activcopy</h1>
                </Link>
                <div className='header-actions'>
                    <Link to='/' onClick={() => { scrollTop() }}>
                        <p>início</p>
                    </Link>
                    <Link to='/services' onClick={() => { scrollTop() }}>
                        <p>serviços</p>
                    </Link>
                    <Link to='/contact' onClick={() => { scrollTop() }}>
                        <p>contactos</p>
                    </Link>
                    <div className='lang-div'>
                        <p>PT</p>
                        <p>EN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MobileHeader() {

    const [mobileMenu, setMobileMenu] = useState(false)
    const showMobileMenu = () => setMobileMenu(!mobileMenu)

    return (
        <>
            <div className='mobile-header'>
                <Link to='/' onClick={() => { defaultState() }}>
                    <h1 className='title'>activcopy</h1>
                </Link>
                <AiOutlineMenu size='1.8em' onClick={() => { showMobileMenu(); disableScroll() }} />
            </div>

            <div className={mobileMenu ? 'mobile-menu enabled' : 'mobile-menu'}>
                <AiOutlineCloseSquare size='1.8em' onClick={() => { showMobileMenu(); enableScroll() }} className='mobile-menu-close-btn' />
                <Link to='/' onClick={() => { defaultState() }}>
                    <p>início</p>
                </Link>
                <Link to='/services' onClick={() => { defaultState() }}>
                    <p>serviços</p>
                </Link>
                <Link to='/contact' onClick={() => { defaultState() }}>
                    <p>contactos</p>
                </Link>
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
