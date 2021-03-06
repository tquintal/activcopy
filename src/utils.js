import $ from 'jquery'

export function scrollTop() {
    $('html, body').animate(
        {
            scrollTop: $('title').offset().top
        },
        500
    )
}

export const backToTop = () => window.scrollTo(0, 0)

export function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

// ENABLE/DISABLE SCROLL
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 }

function preventDefault(e) {
    e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e)
        return false
    }
}

var supportsPassive = false
try {
    window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get: function () { supportsPassive = true }
    }))
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

export function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false)
    window.addEventListener(wheelEvent, preventDefault, wheelOpt)
    window.addEventListener('touchmove', preventDefault, wheelOpt)
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

export function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    window.removeEventListener('touchmove', preventDefault, wheelOpt)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}
