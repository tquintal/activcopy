import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function BigFormatShop() {

    const [order, setOrder] = useState({
        Width: '',
        Height: '',
        Material: 'Vinil branco mate',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '',
        Name: '',
        EMail: '',
        Contact: '',
        Address: '',
        File: false,
        Note: '',
        Total: '0€'
    })

    const LogOrder = () => {
        console.table(order)
    }

    const { t } = useTranslation()

    const setOrderCompleted = () => {
        if (order.Width > 160 || order.Width < 90 || order.Height < 50 || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
            localStorage.removeItem(['Order'])
            alert(t('Shop.Error'))
            LogOrder()
        } else {
            LogOrder()
            localStorage.removeItem(['Order'])
            console.log(`Local storage cleared`)
            localStorage['Order'] = JSON.stringify(order)
            console.log(`Order placed`)
        }
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
                        <div className='shop-cat-left-side'>
                            <ShopBack />
                            <h1>{t('Shop.BigFormat')}</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={LogOrder} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='Tipo de encomenda' value={t('Shop.BigFormat')}></input>

                                <p>{t('ShopBusinessCards.Format')}</p>
                                <input type='number' name='Largura' placeholder='Min 90cm ~ max 160cm' min={90} max={160} onChange={(e) => { setOrder({ ...order, Width: e.target.value }) }} required></input>
                                <input type='number' name='Altura' placeholder='Min 50cm' min={50} onChange={(e) => { setOrder({ ...order, Height: e.target.value }) }} required></input>

                                <p>{t('ShopBusinessCards.Material')}</p>
                                <select type='select' name='Material' onChange={(e) => { setOrder({ ...order, Material: e.target.value }) }} required>
                                    <option value='Vinil branco mate'>Vinil branco mate</option>
                                    <option value='Vinil transparente'>Vinil transparente</option>
                                    <option value='Vinil monomérico'>Vinil monomérico</option>
                                    <option value='Lona coated 440g branco mate'>Lona coated 440g branco mate</option>
                                    <option value='Tela / canvas'>Tela / canvas</option>
                                    <option value='Rollup branco mate 420g'>Rollup branco mate 420g</option>
                                    <option value='Papel de parede wallcover'>Papel de parede wallcover</option>
                                    <option value='Papel de parede spray e up (cola adesiva no verso)'>Papel de parede spray e up (cola adesiva no verso)</option>
                                </select>

                                <p>{t('ShopBusinessCards.Printing')}</p>
                                <select type='select' name='Impressao' onChange={(e) => { setOrder({ ...order, Printing: e.target.value }) }} required>
                                    <option value='Frente'>{t('ShopBusinessCards.FirstPrinting')}</option>
                                </select>
                                <select type='select' name='Impressao' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>{t('ShopBusinessCards.FirstPrinting2')}</option>
                                    <option value='Preto e branco'>{t('ShopBusinessCards.SecondPrinting2')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Amount')}</p>
                                <input type='number' name='Quantidade' placeholder={t('ShopBusinessCards.Amount') + ' *'} onChange={(e) => { setOrder({ ...order, Amount: e.target.value }) }} required></input>

                                <input type='text' name='Nome' placeholder='Nome *' onChange={(e) => { setOrder({ ...order, Name: e.target.value }) }} required></input>
                                <input type='email' name='E-Mail' placeholder='E-mail *' onChange={(e) => { setOrder({ ...order, EMail: e.target.value }) }} required></input>
                                <input type='text' name='Contacto' placeholder={t('ShopBusinessCards.Contact') + ' *'} onChange={(e) => { setOrder({ ...order, Contact: e.target.value }) }} required></input>
                                <input type='text' name='Morada' placeholder={t('ShopBusinessCards.Address') + ' *'} onChange={(e) => { setOrder({ ...order, Address: e.target.value }) }} required></input>
                                <label>
                                    {t('ShopBusinessCards.UploadFile') + ' *'}
                                    <input type='file' name='Attachment' accept='image/png, image/jpeg' onChange={(e) => { setOrder({ ...order, File: true }) }} className='shop-attachment' required></input>
                                </label>
                                <textarea name='Comentario' placeholder={t('ShopBusinessCards.Note')} onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <p>Total: {order.Total}</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='IBAN' value={'XXX XXX XXX XXX XXX'}></input>
                                <input type='hidden' name='Total' value={order.Total}></input>

                                <input type='hidden' name='_captcha' value='false'></input>
                                <p className='shop-required-fields'>{t('Form.Info')}</p>

                                <input type='hidden' name='_template' value='table'></input>

                                <button type='submit' onClick={setOrderCompleted} className='shop-button'>{t('ShopBusinessCards.Order')}</button>
                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/shop/order-completed' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
