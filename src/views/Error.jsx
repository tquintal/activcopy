import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error-view'>
            <div>
                <h2>ERRO 404 :/</h2>
                <br />
                <Link to='/'><button>Voltar ao início</button></Link>
            </div>
        </div>
    )
}

export default Error
