import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function TShirts() {

    const [order, setOrder] = useState({
        TShirt: 'T-Shirt Adulto',
        Size: 'XS',
        Color: 'Branco',
        Printing: {
            FrenteCentro: true,
            CostasCentro: false,
            FrentePeitoEsquerdo: false,
            MangaEsquerda: false,
            MangaDireita: false
        },
        Amount: '1',
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
        if (order.Amount === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
            LogOrder()
            alert(t('Shop.Error'))
        } else {
            LogOrder()
            localStorage.removeItem(['Order'])
            console.log(`Local storage cleared`)
            // localStorage['Order'] = JSON.stringify(order)
            localStorage['Order'] = true
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
                        <div className='shop-cat-img'>
                            <img src={BCards} alt='b-cards' onClick={LogOrder} />
                        </div>
                        <div className='shop-cat-form-container'>
                            <ShopBack />
                            <h1>T-Shirts</h1>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>
                                <p>T-Shirt</p>
                                <select type='select' name='TShirt' onChange={(e) => { setOrder({ ...order, TShirt: e.target.value }) }} required>
                                    <option value='TShirtAdulto'>T-Shirt Adulto</option>
                                    <option value='TShirtCrianca'>T-Shirt Criança</option>
                                    <option value='TShirtOrganica'>T-Shirt Orgânica</option>
                                </select>

                                <p>Tamanho</p>
                                <select type='select' name='Tamanho' onChange={(e) => { setOrder({ ...order, Size: e.target.value }) }} required>
                                    <option value='XS'>XS</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                    <option value='2XL'>2XL</option>
                                    <option value='3XL'>3XL</option>
                                    <option value='4XL'>4XL</option>
                                </select>

                                <p>Cor</p>
                                <select type='select' name='Cor' onChange={(e) => { setOrder({ ...order, Color: e.target.value }) }} required>
                                    <option value='Branco'>Branco</option>
                                    <option value='Outra'>...</option>
                                </select>

                                <p>Zona de Impressão</p>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='FrenteCentro' value='Frente Centro' defaultChecked={true} onChange={() => { order.Printing.FrenteCentro = !order.Printing.FrenteCentro }}></input>
                                    <label htmlFor='FrenteCentro'> Frente centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='CostasCentro' value='Costas Centro' onChange={() => { order.Printing.CostasCentro = !order.Printing.CostasCentro }}></input>
                                    <label htmlFor='CostasCentro'> Costas centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='FrentePeitoEsquerdo' value='Frente peito esquerdo' onChange={() => { order.Printing.FrentePeitoEsquerdo = !order.Printing.FrentePeitoEsquerdo }}></input>
                                    <label htmlFor='FrentePeitoEsquerdo'> Frente peito esquerdo</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='MangaEsquerda' value='Manga esquerda' onChange={() => { order.Printing.MangaEsquerda = !order.Printing.MangaEsquerda }}></input>
                                    <label htmlFor='MangaEsquerda'> Manga esquerda</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='MangaDireita' value='Manga direita' onChange={() => { order.Printing.MangaDireita = !order.Printing.MangaDireita }}></input>
                                    <label htmlFor='MangaDireita'> Manga direita</label><br></br>
                                </div>

                                <p>Quantidade *</p>
                                <input type='text' name='Quantidade' placeholder='Quantidade *' defaultValue='1' onChange={(e) => { setOrder({ ...order, Amount: e.target.value }) }} required></input>
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
                                <input type='hidden' name='OUTRO(?)' value={'XXX XXX XXX XXX XXX'}></input>
                                <input type='hidden' name='Valor' value={order.Total}></input>

                                <input type='hidden' name='_captcha' value='false'></input>
                                <p className='shop-required-fields'>{t('Form.Info')}</p>

                                <input type='hidden' name='_template' value='table'></input>

                                <button type='submit' onClick={setOrderCompleted} className='shop-button'>{t('ShopBusinessCards.Order')}</button>
                                {/* <input type='hidden' name='_next' value='https://activcopy.vercel.app/' /> */}
                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/shop/order-completed' />
                                {/* <input type='hidden' name='_next' value='http://localhost:3000/shop/order-completed' /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
