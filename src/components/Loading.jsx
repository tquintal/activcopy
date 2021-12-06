import React from 'react'
import ClockLoader from 'react-spinners/ClockLoader'

function Loading() {
    let color = '#ff4500'
    return (
        <div className='loading-screen'>
            <ClockLoader color={color} />
            <p>loading</p>
        </div>
    )
}

export default Loading
