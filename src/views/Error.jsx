import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='error-view'>
            <div>
                <h2>ERRO 404 :/</h2>
                <br />
                <button><Link to='/'>Voltar ao início</Link></button>
            </div>
        </div>
    )
}
