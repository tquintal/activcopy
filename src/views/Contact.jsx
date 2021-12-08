import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='contact'
        >
            <div className='contact-container'>

                <div className='contacts-container'>
                    <div>
                        <h1>Contactos</h1>
                        <p><span>E-mail:</span> geral@activcopy.pt</p>
                        <p><span>Orçamentos:</span> activcopy.orcamentos@gmail.com</p>
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

                <div className='maps'>
                    <p>*Maps*</p>
                </div>

                <div className='contact-form-container'>
                    <h1>Fale connosco!</h1>
                    <div className='contact-form-first-block'>
                        <div>
                            <input placeholder='Nome *'></input>
                            <input placeholder='E-mail *'></input>
                        </div>
                        <div>
                            <input placeholder='Número telemóvel'></input>
                            <input placeholder='Assunto *'></input>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder='Escreva aqui a sua mensagem *' className='message-textarea'></textarea>
                    </div>
                    <p>Campos obrigatórios *</p>
                    <button>Enviar</button>
                </div>
            </div>
        </motion.div>
    )
}
