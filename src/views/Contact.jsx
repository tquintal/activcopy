import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <Header />

            <div className='contact'>
                <div className='contact-container'>
                    <div className='maps'>
                        <p>*Maps*</p>
                    </div>
                    <div className='contacts-container'>
                        <div>
                            <h1>Contactos</h1>
                            <p><span>E-mail:</span> geral@activcopy.pt</p>
                            <p><span>E-mail orçamentos:</span></p>
                            <p>activcopy.orcamentos@gmail.com</p>
                            <p><span>Telefone:</span> 234 383 210</p>
                        </div>
                        <div>
                            <h1>Horário</h1>
                            <p><span>Semana:</span> 8H30 - 20H00</p>
                            <p><span>Sábado:</span> 9H00 - 19H00</p>
                            <p><span>Domingo:</span> 9H00 - 19H00</p>
                        </div>
                        <div>
                            <h1>Morada</h1>
                            <p>Rua Dr. Mário Sacramento</p>
                            <p>Nº49, 3810-106 Aveiro</p>
                        </div>
                    </div>
                    <div className='contact-form-container'>
                        <h1>Fale connosco!</h1>
                        <div className='contact-form-first-block'>
                            <div>
                                <input placeholder='Nome'></input>
                                <input placeholder='E-mail'></input>
                            </div>
                            <div>
                                <input placeholder='Número telemóvel'></input>
                                <input placeholder='Assunto'></input>
                            </div>
                        </div>
                        <div>
                            <input placeholder='Escreva aqui a sua mensagem' className='message-input'></input>
                        </div>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
