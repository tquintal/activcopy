import React from 'react'
import { scrollTop } from '../utils'
import { MdKeyboardArrowUp } from 'react-icons/md'
import cn from 'classnames'

export class ScrollToTop extends React.Component {

    state = {
        visible: false
    }

    toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            this.setState({ visible: true })
        } else {
            this.setState({ visible: false })
        }
    }


    componentDidMount() {
        document.addEventListener('scroll', this.toggleVisibility)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.toggleVisibility)
    }

    render() {
        return (
            <MdKeyboardArrowUp className={cn('scoll-to-top-container', { visible: this.state.visible })} onClick={scrollTop} size='2.5em' />
        )
    }
}
