import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

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
        NIF: '',
        PromoCode: '',
        File: false,
        Note: '',
        Total: '15.5€'
    })

    const [ok, setOk] = useState(false)

    const [total, setTotal] = useState(15.5)

    let cTotal = 0

    const calculate = (material, printing, quantity) => {
        cTotal = 15.5

        if (material === 'Cartolina ouro' || material === 'Cartolina prata')
            cTotal += 1.5

        if (printing === 'Frente e verso')
            cTotal += 1.5

        switch (quantity) {
            case '200':
                cTotal = cTotal * 2
                break
            case '300':
                cTotal = cTotal + cTotal * 1.85
                break
            case '400':
                cTotal = cTotal + cTotal * 2.45
                break
            case '500':
                cTotal = cTotal + cTotal * 3.2
                break
            case '1000':
                cTotal = cTotal + cTotal * 4.5
                break
            case '1500':
                cTotal = cTotal + cTotal * 5.15
                break
            case '2000':
                cTotal = cTotal + cTotal * 6.4
                break
            case '3000':
                cTotal = cTotal + cTotal * 8.2
                break
            default:
                cTotal = cTotal + 0
        }

        if (order.PromoCode === 'activ10')
            cTotal = cTotal * 0.9

        return roundUp(cTotal, 2)
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
                            <h1>Cartões de visita</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={() => console.table(order)} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='Nova encomenda de cartões de visita em activcopy.pt'></input>
                                <input type='hidden' name='Encomenda' value='Cartões de visita'></input>

                                <p>Formato</p>
                                <select type='select' name='Formato' onChange={(e) => { setOrder({ ...order, Format: e.target.value }) }} required>
                                    <option value='Retangular'>Retangular</option>
                                    <option value='Quadrado'>Quadrado</option>
                                </select>

                                <p>Material</p>
                                <select type='select' name='Material' onChange={(e) => {
                                    setOrder({ ...order, Material: e.target.value })
                                    setTotal(calculate(e.target.value, order.Printing, order.Amount))
                                }} required>
                                    <option value='Cartolina'>Cartolina CLA 315g</option>
                                    <option value='Couché'>Couché 350g</option>
                                    <option value='Papel kraft'>Papel Kraft 300g</option>
                                    <option value='Cartolina ouro'>Cartolina ouro 330g</option>
                                    <option value='Cartolina prata'>Cartolina prata 330g</option>
                                    <option value='Rives design'>Rives design reciclado 250g</option>
                                    <option value='Rives tradition'>Rives tradition reciclado 250g</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' onChange={(e) => {
                                    setOrder({ ...order, Printing: e.target.value })
                                    setTotal(calculate(order.Material, e.target.value, order.Amount))
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
                                <input type='url' name='Link' placeholder='Link' onChange={(e) => e.target.value !== '' ? setOk(true) : setOk(false)}></input>
                                <textarea name='Comentário' placeholder='Comentário' onChange={(e) => { setOrder({ ...order, Note: e.target.value }) }} className='shop-text-area' />
                                <div className='shop-promo-code'>
                                    <input type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        if (order.PromoCode === 'activ10') {
                                            setTotal(calculate(order.Material, order.Printing, order.Amount))
                                            alert('Cupão aplicado com sucesso!')
                                        }
                                        else {
                                            alert('Erro, cupão inválido.')
                                        }
                                    }}>Aplicar</div>
                                </div>
                                <p>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Valor' value={`${total}€`}></input>

                                <p className='shop-required-fields'>IVA e valor de envio incluídos</p>

                                <input type='hidden' name='_captcha' value='false'></input>
                                <p className='shop-required-fields'>Campos obrigatórios *</p>

                                <input type='hidden' name='_template' value='table'></input>

                                {
                                    ok ?
                                        <button type='submit' onClick={setOrderCompleted} className='shop-button'>Encomendar</button>
                                        :
                                        <div className='shop-button' style={{ textAlign: 'center' }} onClick={() => alert(t('Shop.Error'))}>Encomendar</div>
                                }

                                <input type='hidden' name='_next' value='https://activcopy.vercel.app/shop/order-completed' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
