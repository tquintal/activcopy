import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function BusinessCardss() {

    const [order, setOrder] = useState({
        Format: 'Retangular (65mm x 55mm)',
        Material: 'Cartolina CLA 350G',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '100',
        File: 'Nome do ficheiro',
        EMail: '',
        Contact: '',
        Address: '',
        Total: 'X€'
    })

    const ShowOrder = () => {
        console.log(order)
    }

    const { t } = useTranslation()

    const setOrderDetails = () => {
        localStorage.removeItem(['Order'])
        console.log(`Local storage cleared`)
        localStorage['Order'] = JSON.stringify(order)
        console.log(`Order placed`)
    }

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
                            <h1>{t('ShopBusinessCards.Title')}</h1>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>
                                <p>{t('ShopBusinessCards.Format')}</p>
                                <select type='select' name='Formato' onChange={(e) => { setOrder({ ...order, Format: e.target.value }) }} required>
                                    <option value='Retangular'>{t('ShopBusinessCards.FirstFormat')}</option>
                                    <option value='Quadrado'>{t('ShopBusinessCards.SecondFormat')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Material')}</p>
                                <select type='select' name='Material' onChange={(e) => { setOrder({ ...order, Material: e.target.value }) }} required>
                                    <option value='Cartolina'>{t('ShopBusinessCards.FirstMaterial')}</option>
                                    <option value='Couche'>{t('ShopBusinessCards.SecondMaterial')}</option>
                                    <option value='Papel kraft'>{t('ShopBusinessCards.ThirdMaterial')}</option>
                                    <option value='Papel de algodão'>{t('ShopBusinessCards.FourthMaterial')}</option>
                                    <option value='Cartolina ouro'>{t('ShopBusinessCards.FifthMaterial')}</option>
                                    <option value='Cartolina prata'>{t('ShopBusinessCards.SixthMaterial')}</option>
                                    <option value='Rives design'>{t('ShopBusinessCards.SeventhMaterial')}</option>
                                    <option value='Rives tradition'>{t('ShopBusinessCards.EighthMaterial')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Printing')}</p>
                                <select type='select' name='Impressao' onChange={(e) => { setOrder({ ...order, Printing: e.target.value }) }} required>
                                    <option value='Frente'>{t('ShopBusinessCards.FirstPrinting')}</option>
                                    <option value='Frente e verso'>{t('ShopBusinessCards.SecondPrinting')}</option>
                                </select>
                                <select type='select' name='Impressao2' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>{t('ShopBusinessCards.FirstPrinting2')}</option>
                                    <option value='Preto e branco'>{t('ShopBusinessCards.SecondPrinting2')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Amount')}</p>
                                <select type='select' name='Quantidade' onChange={(e) => { setOrder({ ...order, Amount: e.target.value }) }} required>
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
                                <input type='text' name='Contacto' placeholder={t('ShopBusinessCards.Contact')} required></input>
                                <input type='text' name='Morada' placeholder={t('ShopBusinessCards.Address')} required></input>
                                <label>
                                    {t('ShopBusinessCards.UploadFile')}
                                    <input type='file' name='Attachment' accept='image/png, image/jpeg' className='shop-attachment' required></input>
                                </label>
                                <p>Total: X€</p>
                                <button type='submit' onClick={setOrderDetails} className='shop-button'>{t('ShopBusinessCards.Order')}</button>
                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/shop/order-completed' />
                            </form>
                            <button onClick={ShowOrder}>Log order</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
