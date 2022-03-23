import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function TShirtSize() {
    const { t } = useTranslation()

    const [order, setOrder] = useState({
        TShirt: 'T-Shirt Adulto',
        Size: 'M',
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
        Total: 7.5
    })

    const [total, setTotal] = useState(7.5)

    let cTotal = 0

    const calculate = (material, color, printing, quantity) => {
        cTotal = 4

        if (material === 'T-Shirt Orgânica')
            cTotal += 1

        console.log('COLOR:', color)
        if (color !== 'Branco')
            cTotal += 1

        for (const key in printing) {
            if (printing[key])
                if (key === 'FrenteCentro' || key === 'CostasCentro')
                    cTotal += 3.5
                else
                    cTotal += 3
        }

        console.log('QUANTITY', quantity)

        cTotal *= parseInt(quantity)

        return cTotal
    }

    const LogOrder = () => {
        console.log('Order.Total', order.Total)
        console.log('Total', total)
        console.table(order)
    }

    const TShirtSize = () => {
        if (order.TShirt === 'T-Shirt Adulto') {
            return (
                <select type='select' name='Tamanho' onChange={(e) => { setOrder({ ...order, Size: e.target.value }) }} defaultValue={order.Size} required>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                    <option value='2XL'>2XL</option>
                    <option value='3XL'>3XL</option>
                    <option value='4XL'>4XL</option>
                </select>
            )
        } else if (order.TShirt === 'T-Shirt Criança') {
            return (
                <select type='select' name='Tamanho' onChange={(e) => { setOrder({ ...order, Size: e.target.value }) }} defaultValue={order.Size} required>
                    <option value='1-2'>1-2</option>
                    <option value='3-4'>3-4</option>
                    <option value='5-6'>5-6</option>
                    <option value='7-8'>7-8</option>
                    <option value='9-11'>9-11</option>
                    <option value='12-14'>12-14</option>
                </select>
            )
        } else {
            return (
                <select type='select' name='Tamanho' onChange={(e) => { setOrder({ ...order, Size: e.target.value }) }} defaultValue={order.Size} required>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                </select>
            )
        }
    }

    const TShirtColor = () => {
        if (order.TShirt === 'T-Shirt Adulto') {
            return (
                <select type='select' name='Cor' onChange={(e) => {
                    setOrder({ ...order, Color: e.target.value })
                    setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                }} defaultValue={order.Color} required>
                    <option value='Branco'>Branco</option>
                    <option value='Preto'>Preto</option>
                    <option value='Cor'>... Cor</option>
                </select>
            )
        } else if (order.TShirt === 'T-Shirt Criança') {
            return (
                <select type='select' name='Cor' onChange={(e) => {
                    setOrder({ ...order, Color: e.target.value })
                    setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                }} defaultValue={order.Color} required>
                    <option value='Branco'>Branco</option>
                    <option value='Vermelho'>Vermelho</option>
                    <option value='Cinza'>Cinza</option>
                </select>
            )
        } else {
            return (
                <select type='select' name='Cor' onChange={(e) => {
                    setOrder({ ...order, Color: e.target.value })
                    setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                }} defaultValue={order.Color} required>
                    <option value='Branco'>Branco</option>
                    <option value='Azul'>Azul</option>
                    <option value='Verde'>Verde</option>
                </select>
            )
        }
    }

    const setOrderCompleted = () => {
        if (order.Amount === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
            LogOrder()
            alert(t('Shop.Error'))
        } else if (order.Printing.FrenteCentro !== true && order.Printing.CostasCentro !== true && order.Printing.FrentePeitoEsquerdo !== true && order.Printing.MangaEsquerda !== true && order.Printing.MangaDireita !== true) {
            LogOrder()
            alert(t('Shop.Error'))
        } else {
            setOrder({ ...order, Total: total })
            LogOrder()
            localStorage.removeItem(['Order'])
            console.log(`Local storage cleared`)
            localStorage['Order'] = JSON.stringify(order)
            console.log(`Order placed`)
        }
    }

    const motionProps = {
        transition: { duration: 0.4 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.div {...motionProps}>
            <div className='service'>
                <div className='service-container'>
                    <div className='shop-cat-container'>
                        <div className='shop-cat-left-side'>
                            <ShopBack />
                            <h1>T-Shirts</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={() => {
                                    setOrder({ ...order, Total: total })
                                    LogOrder()
                                }} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='Tipo de encomenda' value='T-Shirts'></input>

                                <p>T-Shirt</p>
                                <select type='select' name='TShirt' onChange={(e) => {
                                    setOrder({ ...order, TShirt: e.target.value, Size: e.target.value === 'T-Shirt Adulto' ? 'M' : e.target.value === 'T-Shirt Criança' ? '1-2' : 'M' })
                                    setTotal(calculate(e.target.value, order.Color, order.Printing, order.Amount))
                                }} required>
                                    <option value='T-Shirt Adulto'>T-Shirt Adulto</option>
                                    <option value='T-Shirt Criança'>T-Shirt Criança</option>
                                    <option value='T-Shirt Orgânica'>T-Shirt Orgânica</option>
                                </select>
                                <p>Tamanho</p>
                                <TShirtSize />
                                <p>Cor</p>
                                <TShirtColor />

                                <p>Zona de Impressão</p>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='FrenteCentro' value='Frente Centro' defaultChecked={true} onChange={(e) => {
                                        order.Printing.FrenteCentro = !order.Printing.FrenteCentro
                                        console.table(order.Printing)
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='FrenteCentro'> Frente centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='CostasCentro' value='Costas Centro' onChange={() => {
                                        order.Printing.CostasCentro = !order.Printing.CostasCentro
                                        console.table(order.Printing)
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='CostasCentro'> Costas centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='FrentePeitoEsquerdo' value='Frente peito esquerdo' onChange={() => {
                                        order.Printing.FrentePeitoEsquerdo = !order.Printing.FrentePeitoEsquerdo
                                        console.table(order.Printing)
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='FrentePeitoEsquerdo'> Frente peito esquerdo</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='MangaEsquerda' value='Manga esquerda' onChange={() => {
                                        order.Printing.MangaEsquerda = !order.Printing.MangaEsquerda
                                        console.table(order.Printing)
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='MangaEsquerda'> Manga esquerda</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='MangaDireita' value='Manga direita' onChange={() => {
                                        order.Printing.MangaDireita = !order.Printing.MangaDireita
                                        console.table(order.Printing)
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='MangaDireita'> Manga direita</label><br></br>
                                </div>

                                <p>Quantidade *</p>
                                <input type='number' name='Quantidade' placeholder='Quantidade *' min={1} defaultValue='1' onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    setTotal(calculate(order.TShirt, order.Color, order.Printing, e.target.value))

                                }} required></input>
                                <input type='text' name='Nome' placeholder='Nome *' onChange={(e) => { setOrder({ ...order, Name: e.target.value }) }} required></input>
                                <input type='email' name='E-Mail' placeholder='E-mail *' onChange={(e) => { setOrder({ ...order, EMail: e.target.value }) }} required></input>
                                <input type='text' name='Contacto' placeholder={t('ShopBusinessCards.Contact') + ' *'} onChange={(e) => { setOrder({ ...order, Contact: e.target.value }) }} required></input>
                                <input type='text' name='Morada' placeholder={t('ShopBusinessCards.Address') + ' *'} onChange={(e) => { setOrder({ ...order, Address: e.target.value }) }} required></input>
                                <label>
                                    {t('ShopBusinessCards.UploadFile') + ' *'}
                                    <input type='file' name='Attachment' accept='image/png, image/jpeg' onChange={(e) => { setOrder({ ...order, File: true }) }} className='shop-attachment' required></input>
                                </label>
                                <textarea name='Comentario' placeholder={t('ShopBusinessCards.Note')} onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <p>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='IBAN' value={'XXX XXX XXX XXX XXX'}></input>
                                <input type='hidden' name='Valor' value={total}></input>

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
