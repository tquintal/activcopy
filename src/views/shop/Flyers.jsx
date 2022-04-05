import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function Flyers() {

    const [order, setOrder] = useState({
        Format: 'A4',
        Material: 'Tecno Color 100g',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '100',
        Finish: '',
        Name: '',
        EMail: '',
        Contact: '',
        Address: '',
        NIF: '',
        PromoCode: '',
        File: false,
        Note: '',
        Total: '0€'
    })

    const LogOrder = () => {
        console.table(order)
    }

    const { t } = useTranslation()

    const setOrderCompleted = () => {
        if (order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
            LogOrder()
            alert(t('Shop.Error'))
        } else {
            LogOrder()
            localStorage.removeItem(['Order'])
            console.log(`Local storage cleared`)
            localStorage['Order'] = JSON.stringify(order)
            console.log(`Order placed`)
        }
    }

    const [finishSelected, setFinishSelected] = useState('')

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
                            <h1>Flyers</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={LogOrder} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='Nova encomenda de flyers em activcopy.pt'></input>
                                <input type='hidden' name='Encomenda' value='Flyers'></input>

                                <p>Formato</p>
                                <select type='select' name='Formato' onChange={(e) => { setOrder({ ...order, Format: e.target.value }) }} required>
                                    <option value='A4'>A4</option>
                                    <option value='A5'>A5</option>
                                    <option value='A6'>A6</option>
                                </select>

                                <p>Material</p>
                                <select type='select' name='Material' onChange={(e) => { setOrder({ ...order, Material: e.target.value }) }} required>
                                    <option value='Tecno Color 100g'>Tecno Color 100g</option>
                                    <option value='Couché 135g'>Couché 135g</option>
                                    <option value='Papel reciclado 100g'>Papel reciclado 100g</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' onChange={(e) => { setOrder({ ...order, Printing: e.target.value }) }} required>
                                    <option value='Frente'>Frente</option>
                                    <option value='Frente e verso'>Frente e verso</option>
                                </select>
                                <select type='select' name='Cores' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>Cores</option>
                                    <option value='Preto e branco'>Preto e branco</option>
                                </select>

                                <p>Quantidade</p>
                                <select type='select' name='Quantidade' onChange={(e) => { setOrder({ ...order, Amount: e.target.value }) }} required>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                    <option value='500'>500</option>
                                    <option value='1000'>1000</option>
                                    <option value='2000'>2000</option>
                                    <option value='3000'>3000</option>
                                </select>

                                <p>Acabamento <span className='shop-attachment-img'>(opcional)</span></p>
                                <label className='shop-flyers-finish'>
                                    <input type='radio' name='Acabamento' value='Dobra em U' onChange={() => {
                                        setFinishSelected('Dobra em U')
                                        setOrder({ ...order, Finish: 'Dobra em U' })
                                    }} checked={finishSelected === 'Dobra em U'} />
                                    Dobra em U
                                </label>
                                <label className='shop-flyers-finish'>
                                    <input type='radio' name='Acabamento' value='Dobra em Z' onChange={() => {
                                        setFinishSelected('Dobra em Z')
                                        setOrder({ ...order, Finish: 'Dobra em Z' })
                                    }} checked={finishSelected === 'Dobra em Z'} />
                                    Dobra em Z
                                </label>

                                <input type='text' name='Nome' placeholder='Nome *' onChange={(e) => { setOrder({ ...order, Name: e.target.value }) }} required></input>
                                <input type='email' name='E-Mail' placeholder='E-mail *' onChange={(e) => { setOrder({ ...order, EMail: e.target.value }) }} required></input>
                                <input type='text' name='Contacto' placeholder='Contacto *' onChange={(e) => { setOrder({ ...order, Contact: e.target.value }) }} required></input>
                                <input type='text' name='Morada' placeholder='Morada *' onChange={(e) => { setOrder({ ...order, Address: e.target.value }) }} required></input>
                                <input type='text' name='NIF' placeholder='NIF' onChange={(e) => { setOrder({ ...order, NIF: e.target.value }) }}></input>
                                <label>
                                    Carregar ficheiro * <span className='shop-attachment-img'>(imagem)</span>
                                    <input type='file' name='Anexo' accept='image/png, image/jpeg' onChange={(e) => { setOrder({ ...order, File: true }) }} className='shop-attachment' required></input>
                                </label>
                                <textarea name='Comentário' placeholder='Comentário' onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <div className='shop-promo-code'>
                                    <input type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        order.PromoCode === 'activ10' ?
                                            alert('Correct Code')
                                            : alert('Error')
                                    }}>Aplicar</div>
                                </div>
                                <p>Total: {order.Total}</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Valor' value={order.Total}></input>

                                <p className='shop-required-fields'>IVA incluído</p>

                                <input type='hidden' name='_captcha' value='false'></input>
                                <p className='shop-required-fields'>Campos obrigatórios *</p>

                                <input type='hidden' name='_template' value='table'></input>

                                <button type='submit' onClick={setOrderCompleted} className='shop-button'>Encomendar</button>
                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/shop/order-completed' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
