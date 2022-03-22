import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

export default function BigFormatShop() {
    const { t } = useTranslation()

    const [order, setOrder] = useState({
        Width: '',
        Height: '',
        Material: 'Vinil branco mate',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '1',
        Name: '',
        EMail: '',
        Contact: '',
        Address: '',
        File: false,
        Note: '',
        Total: '0€'
    })

    const [total, setTotal] = useState(0)

    let cTotal = 0

    const calculate = (h, w, material, qt) => {
        if (material === 'Rollup branco mate 420g') {
            cTotal = 120 * qt
        } else {
            if (h !== '' && w !== '') {
                h = parseFloat(h) / 100
                w = parseFloat(w) / 100
            }

            switch (material) {
                case 'Vinil branco mate':
                    cTotal = (h * w) * 40
                    break
                case 'Vinil transparente':
                    cTotal = (h * w) * 40
                    break
                case 'Vinil monomérico':
                    cTotal = (h * w) * 50
                    break
                case 'Lona coated 440g branco mate':
                    cTotal = (h * w) * 35
                    break
                case 'Tela / canvas':
                    cTotal = (h * w) * 45
                    break
                case 'Papel de parede wallcover':
                    cTotal = (h * w) * 40
                    break
                case 'Papel de parede spray e up (cola adesiva no verso)':
                    cTotal = (h * w) * 50
                    break
                default:
                    cTotal = 120
            }

            cTotal = cTotal * qt
        }

        return roundUp(cTotal, 2)
    }

    const setOrderCompleted = () => {
        setOrder({ ...order, Total: `${total}€` })

        if (order.Material === 'Rollup branco mate 420g') {
            console.log(`IF order.Material === 'Rollup branco mate 420g'`)

            setOrder({ ...order, Width: 'Rollup', Height: 'Rollup' })
        }

        if (order.Width === '' || order.Height === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
            console.log(`IF order.Width === '' || order.Height === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true`)

            localStorage.removeItem(['Order'])
            console.log(`Local storage cleared`)

            alert(t('Shop.Error'))
        } else {
            console.log('ELSE')

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
                            <h1>{t('Shop.BigFormat')}</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={() => console.table(order)} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='Tipo de encomenda' value={t('Shop.BigFormat')}></input>

                                <p>{t('ShopBusinessCards.Format')}</p>
                                {
                                    order.Material !== 'Rollup branco mate 420g' ?
                                        <div className='shop-form'>
                                            <input type='number' name='Altura' placeholder={t('ShopBusinessCards.Height') + ' (min 50cm)'} min={50} onChange={(e) => {
                                                setOrder({ ...order, Height: e.target.value })
                                                if (order.Width !== '') setTotal(calculate(order.Width, e.target.value, order.Material, order.Amount))
                                            }} required></input>
                                            <input type='number' name='Largura' placeholder={t('ShopBusinessCards.Width') + ' (max 160cm)'} max={160} onChange={(e) => {
                                                setOrder({ ...order, Width: e.target.value })
                                                if (order.Height !== '') setTotal(calculate(order.Height, e.target.value, order.Material, order.Amount))
                                            }} required></input>
                                        </div>
                                        :
                                        <div className='shop-form'>
                                            <input type='number' name='Altura' placeholder='Rollup branco mate 420g' disabled></input>
                                            <input type='number' name='Largura' placeholder='Rollup branco mate 420g' disabled></input>
                                        </div>
                                }

                                <p>{t('ShopBusinessCards.Material')}</p>
                                <select type='select' name='Material' onChange={(e) => {
                                    setOrder({ ...order, Material: e.target.value })
                                    if (order.Height !== '' && order.Height !== '') {
                                        setTotal(calculate(order.Height, order.Width, e.target.value, order.Amount))
                                    } else if (e.target.value === 'Rollup branco mate 420g') {
                                        setTotal(calculate(order.Height, order.Width, e.target.value, order.Amount))
                                    } else {
                                        setTotal(0)
                                    }
                                }} required>
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
                                <input type='number' min='1' name='Quantidade' defaultValue='1' placeholder={t('ShopBusinessCards.Amount') + ' *'} onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    if (order.Height !== '' && order.Width !== '') setTotal(calculate(order.Height, order.Width, order.Material, parseInt(e.target.value)))
                                    else if (order.Material === 'Rollup branco mate 420g') setTotal(calculate(order.Height, order.Width, order.Material, parseInt(e.target.value)))
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
