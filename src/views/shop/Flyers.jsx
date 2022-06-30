import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import FlyersIMG from '../../assets/in-shop-flyers.jpg'

export default function Flyers() {

    const { t } = useTranslation()

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
        Total: '24€'
    })

    const [ok, setOk] = useState(false)

    const [total, setTotal] = useState(24)

    let cTotal = 24

    const calculate = (format, material, printing, quantity, finish) => {
        if (format === 'A6') {
            if (material === 'Tecno Color 100g' || material === 'Couché 135g') {
                if (printing === 'Frente') {
                    cTotal = 6
                } else {
                    cTotal = 12
                }
            } else {
                if (printing === 'Frente') {
                    cTotal = 7.25
                } else {
                    cTotal = 13.25
                }
            }
        }

        if (format === 'A5') {
            if (material === 'Tecno Color 100g' || material === 'Couché 135g') {
                if (printing === 'Frente') {
                    cTotal = 10
                } else {
                    cTotal = 20
                }
            } else {
                if (printing === 'Frente') {
                    cTotal = 13
                } else {
                    cTotal = 23
                }
            }
        }

        if (format === 'A4') {
            if (material === 'Tecno Color 100g' || material === 'Couché 135g') {
                if (printing === 'Frente') {
                    cTotal = 20
                } else {
                    cTotal = 30
                }
            } else {
                if (printing === 'Frente') {
                    cTotal = 25
                } else {
                    cTotal = 35
                }
            }
        }

        switch (quantity) {
            case '200':
                cTotal = cTotal * 1.540
                break
            case '500':
                cTotal = cTotal * 2.480
                break
            case '1000':
                cTotal = cTotal * 4.333
                break
            case '2000':
                cTotal = cTotal * 7.930
                break
            case '3000':
                if (material === 'Papel reciclado 100g' && printing === 'Frente e verso')
                    cTotal = 500
                else if (material === 'Papel reciclado 100g' && printing === 'Frente')
                    cTotal = 320
                else
                    cTotal = cTotal * 11.435
                break
            default:
                break
        }

        if (finish === 'Dobra em U' || finish === 'Dobra em Z') {
            if (parseInt(quantity) > 500) {
                cTotal = cTotal + quantity * 0.02
            } else {
                cTotal = cTotal + quantity * 0.05
            }
        }

        if (order.PromoCode === 'activ10') {
            cTotal = cTotal * 0.9
        }

        return roundUp(cTotal, 1) + 4
    }

    const setOrderCompleted = () => {
        if (order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || ok !== true) {
            alert(t('Shop.Error'))
        } else {
            order.Total = `${total}€`
            localStorage.removeItem(['Order'])
            localStorage['Order'] = JSON.stringify(order)
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
                            <h1>Flyers</h1>
                            <div className='shop-cat-img'>
                                <img src={FlyersIMG} alt='b-cards' />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/seractivcopy@hotmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='ACTIVCOPY.PT - Detalhes da sua encomenda. Obrigado pela preferência.'></input>
                                <input type='hidden' name='Encomenda' value='Flyers'></input>

                                <p>Formato</p>
                                <select type='select' name='Formato' onChange={(e) => {
                                    setOrder({ ...order, Format: e.target.value })
                                    setTotal(calculate(e.target.value, order.Material, order.Printing, order.Amount, order.Finish))
                                }} required>
                                    <option value='A4'>A4</option>
                                    <option value='A5'>A5</option>
                                    <option value='A6'>A6</option>
                                </select>

                                <p>Material</p>
                                <select type='select' name='Material' onChange={(e) => {
                                    setOrder({ ...order, Material: e.target.value })
                                    setTotal(calculate(order.Format, e.target.value, order.Printing, order.Amount, order.Finish))
                                }} required>
                                    <option value='Tecno Color 100g'>Tecno Color 100g</option>
                                    <option value='Couché 135g'>Couché 135g</option>
                                    <option value='Papel reciclado 100g'>Papel reciclado 100g</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' onChange={(e) => {
                                    setOrder({ ...order, Printing: e.target.value })
                                    setTotal(calculate(order.Format, order.Material, e.target.value, order.Amount, order.Finish))
                                }} required>
                                    <option value='Frente'>Frente</option>
                                    <option value='Frente e verso'>Frente e verso</option>
                                </select>
                                <select type='select' name='Cores' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>Cores</option>
                                    <option value='Preto e branco'>Preto e branco</option>
                                </select>

                                <p>Quantidade</p>
                                <select type='select' name='Quantidade' onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    setTotal(calculate(order.Format, order.Material, order.Printing, e.target.value, order.Finish))
                                }} required>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                    <option value='500'>500</option>
                                    <option value='1000'>1000</option>
                                    <option value='2000'>2000</option>
                                    <option value='3000'>3000</option>
                                </select>

                                <p>Acabamento</p>
                                <select type='select' name='Acabamento' onChange={(e) => {
                                    setOrder({ ...order, Finish: e.target.value })
                                    setTotal(calculate(order.Format, order.Material, order.Printing, order.Amount, e.target.value))
                                }} required>
                                    <option value='Sem acabamento'>Sem acabamento</option>
                                    <option value='Dobra em U'>Dobra em U</option>
                                    <option value='Dobra em Z'>Dobra em Z</option>
                                </select>

                                <p>Informação</p>
                                <input type='text' name='Nome' placeholder='Nome *' onChange={(e) => { setOrder({ ...order, Name: e.target.value }) }} required></input>
                                <input type='email' name='E-Mail' placeholder='E-mail *' onChange={(e) => { setOrder({ ...order, EMail: e.target.value }) }} required></input>
                                <input type='text' name='Contacto' placeholder='Contacto *' onChange={(e) => { setOrder({ ...order, Contact: e.target.value }) }} required></input>
                                <input type='text' name='Morada' placeholder='Morada *' onChange={(e) => { setOrder({ ...order, Address: e.target.value }) }} required></input>
                                <input type='text' name='NIF' placeholder='NIF' onChange={(e) => { setOrder({ ...order, NIF: e.target.value }) }}></input>
                                <label>
                                    Carregar imagem <span className='shop-attachment-img'>(1mb máx)</span> ou link *
                                    <input type='file' name='Anexo' accept='image/png, image/jpeg' onChange={(e) => {
                                        setOrder({ ...order, File: true })
                                        e.target.value !== '' ? setOk(true) : setOk(false)
                                    }} className='shop-attachment'></input>
                                </label>
                                <input type='url' name='Link' placeholder='Link (ex: wetransfer)' onChange={(e) => e.target.value !== '' ? setOk(true) : setOk(false)}></input>
                                <textarea name='Comentário' placeholder='Comentário' onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <div className='shop-promo-code'>
                                    <input disabled={true} type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        if (order.PromoCode === 'activ10') {
                                            setTotal(calculate(order.Format, order.Material, order.Printing, order.Amount, order.Finish))
                                            alert('Cupão aplicado com sucesso!')
                                        }
                                        else {
                                            alert('Indisponível de momento')
                                        }
                                    }}>Aplicar</div>
                                </div>
                                <p style={{ fontWeight: '500' }}>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Valor' value={`${total}€`}></input>

                                <p className='shop-required-fields'>IVA e custo de envio incluídos</p>

                                <input type='hidden' name='_captcha' value='false'></input>
                                <p className='shop-required-fields'>Campos obrigatórios *</p>

                                <input type='hidden' name='_template' value='table'></input>

                                {
                                    ok ?
                                        <button type='submit' onClick={setOrderCompleted} className='shop-button'>Comprar Online</button>
                                        :
                                        <div className='shop-button' style={{ textAlign: 'center' }} onClick={() => alert(t('Shop.Error'))}>Comprar Online</div>
                                }

                                <input type='hidden' name='_next' value={`${window.location.origin}/shop/order-completed`} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
