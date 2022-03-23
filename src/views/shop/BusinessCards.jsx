import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

export default function BusinessCardss() {
    const { t } = useTranslation()

    const [order, setOrder] = useState({
        Format: 'Retangular (65mm x 55mm)',
        Material: 'Cartolina CLA 350G',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '100',
        Name: '',
        EMail: '',
        Contact: '',
        Address: '',
        File: false,
        Note: '',
        Total: 8.5
    })

    const [total, setTotal] = useState(8.5)

    let cTotal = 0

    const calculate = (material, printing, quantity) => {
        cTotal = 8.5

        if (material === 'Cartolina ouro' || material === 'Cartolina prata')
            cTotal += 1.5

        if (printing === 'Frente e verso')
            cTotal += 1.5

        switch (quantity) {
            case '200':
                cTotal = cTotal * 2
                break
            case '300':
                cTotal = roundUp(cTotal + cTotal * 1.85, 2)
                break
            case '400':
                cTotal = roundUp(cTotal + cTotal * 2.45, 2)
                break
            case '500':
                cTotal = roundUp(cTotal + cTotal * 3.2, 2)
                break
            case '1000':
                cTotal = roundUp(cTotal + cTotal * 4.5, 2)
                break
            case '1500':
                cTotal = roundUp(cTotal + cTotal * 5.15, 2)
                break
            case '2000':
                cTotal = roundUp(cTotal + cTotal * 6.4, 2)
                break
            case '3000':
                cTotal = roundUp(cTotal + cTotal * 8.2, 2)
                break
            default:
                cTotal = cTotal + 0
        }

        return cTotal
    }

    const LogOrder = () => {
        console.table(order)
    }

    const setOrderCompleted = () => {
        if (order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
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
                            <h1>{t('ShopBusinessCards.Title')}</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={() => LogOrder()} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='Tipo de encomenda' value={t('ShopBusinessCards.Title')}></input>

                                <p>{t('ShopBusinessCards.Format')}</p>
                                <select type='select' name='Formato' onChange={(e) => { setOrder({ ...order, Format: e.target.value }) }} required>
                                    <option value='Retangular'>{t('ShopBusinessCards.FirstFormat')}</option>
                                    <option value='Quadrado'>{t('ShopBusinessCards.SecondFormat')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Material')}</p>
                                <select type='select' name='Material' onChange={(e) => {
                                    setOrder({ ...order, Material: e.target.value })
                                    setTotal(calculate(e.target.value, order.Printing, order.Amount))
                                }} required>
                                    <option value='Cartolina'>{t('ShopBusinessCards.FirstMaterial')}</option>
                                    <option value='Couche'>{t('ShopBusinessCards.SecondMaterial')}</option>
                                    <option value='Papel kraft'>{t('ShopBusinessCards.ThirdMaterial')}</option>
                                    <option value='Cartolina ouro'>{t('ShopBusinessCards.FifthMaterial')}</option>
                                    <option value='Cartolina prata'>{t('ShopBusinessCards.SixthMaterial')}</option>
                                    <option value='Rives design'>{t('ShopBusinessCards.SeventhMaterial')}</option>
                                    <option value='Rives tradition'>{t('ShopBusinessCards.EighthMaterial')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Printing')}</p>
                                <select type='select' name='Impressao' onChange={(e) => {
                                    setOrder({ ...order, Printing: e.target.value })
                                    setTotal(calculate(order.Material, e.target.value, order.Amount))
                                }} required>
                                    <option value='Frente'>{t('ShopBusinessCards.FirstPrinting')}</option>
                                    <option value='Frente e verso'>{t('ShopBusinessCards.SecondPrinting')}</option>
                                </select>
                                <select type='select' name='Impressao2' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>{t('ShopBusinessCards.FirstPrinting2')}</option>
                                    <option value='Preto e branco'>{t('ShopBusinessCards.SecondPrinting2')}</option>
                                </select>

                                <p>{t('ShopBusinessCards.Amount')}</p>
                                <select type='select' name='Quantidade' onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    setTotal(calculate(order.Material, order.Printing, e.target.value))
                                }} required>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                    <option value='300'>300</option>
                                    <option value='400'>400</option>
                                    <option value='500'>500</option>
                                    <option value='1000'>1000</option>
                                    <option value='1500'>1500</option>
                                    <option value='2000'>2000</option>
                                    <option value='3000'>3000</option>
                                </select>

                                <input type='text' name='Nome' placeholder='Nome *' onChange={(e) => { setOrder({ ...order, Name: e.target.value }) }} required></input>
                                <input type='email' name='E-Mail' placeholder='E-mail *' onChange={(e) => { setOrder({ ...order, EMail: e.target.value }) }} required></input>
                                <input type='text' name='Contacto' placeholder={t('ShopBusinessCards.Contact') + ' *'} onChange={(e) => { setOrder({ ...order, Contact: e.target.value }) }} required></input>
                                <input type='text' name='Morada' placeholder={t('ShopBusinessCards.Address') + ' *'} onChange={(e) => { setOrder({ ...order, Address: e.target.value }) }} required></input>
                                <label>
                                    {t('ShopBusinessCards.UploadFile') + ' *'}
                                    <input type='file' name='Attachment' accept='image/png, image/jpeg' onChange={() => { setOrder({ ...order, File: true }) }} className='shop-attachment' required></input>
                                </label>
                                <textarea name='Comentario' placeholder={t('ShopBusinessCards.Note')} onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <p>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='IBAN' value={'XXX XXX XXX XXX XXX'}></input>
                                <input type='hidden' name='Valor' value={order.Total}></input>

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
