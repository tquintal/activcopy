import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export default function ServiceBack() {
    return (
        <NavLink to='/services' className='service-back'>
            <BiArrowBack />
            <p>Voltar</p>
        </NavLink>
    )
}
