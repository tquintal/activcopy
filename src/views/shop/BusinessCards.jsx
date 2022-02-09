import React from 'react'
// import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function BusinessCardss() {

    // const { t } = useTranslation()

    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='service'>
                <div className='service-container'>
                    <div className='shop-cat-container'>
                        <div className='shop-cat-img'>
                            <img src={BCards} alt='b-cards' />
                        </div>
                        <div>
                            <ShopBack />
                            <h1>Business Cards</h1>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>
                                <p>Formato</p>
                                <select type='select' name='Formato' required>
                                    <option value='Retangular'>Retangular (65mm x 55mm)</option>
                                    <option value='Quadrado'>Quadrado (55mm x 55mm)</option>
                                </select>

                                <p>Material</p>
                                <select type='select' name='Material' required>
                                    <option value='Cartolina'>Cartolina CLA 350G</option>
                                    <option value='Couche'>Couché 350G</option>
                                    <option value='PapelKraft'>Papel Kraft 300G</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' required>
                                    <option value='Frente'>Frente</option>
                                    <option value='FrenteEVerso'>Frente e verso</option>
                                </select>
                                <select type='select' name='Impressão2' required>
                                    <option value='Cores'>Cores</option>
                                    <option value='PretoEBranco'>Preto e branco</option>
                                </select>

                                <p>Quantidade</p>
                                <select type='select' name='Quantidade' required>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                    <option value='300'>300</option>
                                    <option value='400'>400</option>
                                    <option value='500'>500</option>
                                    <option value='600'>600</option>
                                    <option value='700'>700</option>
                                    <option value='800'>800</option>
                                    <option value='900'>900</option>
                                    <option value='1000'>1000</option>
                                    <option value='1500'>1500</option>
                                    <option value='2000'>2000</option>
                                    <option value='3000'>3000</option>
                                </select>

                                <input type='email' name='E-Mail' placeholder='E-mail' required></input>
                                <input type='text' name='Contacto' placeholder='Contacto' required></input>
                                <input type='text' name='Morada' placeholder='Morada' required></input>
                                <label>
                                    Carregar ficheiro
                                    <input type='file' name='Attachment' accept='image/png, image/jpeg' required></input>
                                </label>
                                <p>Total: X€</p>
                                <button type='submit' className='shop-button'>Comprar</button>
                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/thank-you' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
