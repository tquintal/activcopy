import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BigFormatIMG from '../../assets/in-shop-big-format.jpg'

export default function BigFormatShop() {

    const { t } = useTranslation()

    const [order, setOrder] = useState({
        Width: '',
        Height: '',
        Material: 'Vinil branco mate green',
        Printing: 'Frente',
        PrintingColor: 'Cores',
        Amount: '1',
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

    const [ok, setOk] = useState(false)

    const [total, setTotal] = useState(0)

    let cTotal = 0

    const calculate = (h, w, material, qt) => {
        let test = order.PromoCode.split('').slice(-6).join('').toUpperCase()

        if (material === 'Rollup branco mate 420g') {
            cTotal = 100 * qt
        } else {
            if (h !== '' && w !== '') {
                h = parseFloat(h) / 100
                w = parseFloat(w) / 100
            }

            switch (material) {
                case 'Vinil branco mate green':
                    cTotal = (h * w) * 33
                    break
                case 'Vinil transparente green':
                    cTotal = (h * w) * 33
                    break
                case 'Vinil monométrico green':
                    cTotal = (h * w) * 40
                    break
                case 'Lona coated blackback 450g green':
                    cTotal = (h * w) * 28
                    break
                case 'Tela / canvas green':
                    cTotal = (h * w) * 45
                    break
                case 'Papel de parede wallcover PVC free':
                    cTotal = (h * w) * 40
                    break
                case 'Papel de parede spray e up (cola adesiva no verso) PVC free':
                    cTotal = (h * w) * 45
                    break
                case 'Papel 200g green':
                    cTotal = (h * w) * 15
                    break
                default:
                    cTotal = 120
            }

            cTotal = cTotal * qt
        }

        if (test === '_AEGIA')
            cTotal = cTotal * 0.8

        return roundUp(cTotal, 1) + 7
    }

    const setOrderCompleted = () => {
        if (order.Material === 'Rollup branco mate 420g') {
            order.Width = 'Rollup'
            order.Height = 'Rollup'
        }
        if (order.Width === '' || order.Height === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || ok !== true || order.Width < 1 || order.Width > 160 || order.Height < 50) {
            localStorage.removeItem(['Order'])
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
                            <h1>Grandes formatos</h1>
                            <div className='shop-cat-img'>
                                <img src={BigFormatIMG} alt='b-cards' />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/seractivcopy@hotmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='ACTIVCOPY.PT - Detalhes da sua encomenda. Obrigado pela preferência.'></input>
                                <input type='hidden' name='Encomenda' value='Grandes formatos'></input>

                                <p>Formato (cm)</p>
                                {
                                    order.Material !== 'Rollup branco mate 420g' ?
                                        <div className='shop-form'>
                                            <input type='number' step={'0.01'} name='Altura' placeholder='Altura (min 50cm)' min={50} onChange={(e) => {
                                                setOrder({ ...order, Height: e.target.value })
                                                if (order.Width !== '') setTotal(calculate(order.Width, e.target.value, order.Material, order.Amount))
                                            }} required></input>
                                            <input type='number' step={'0.01'} name='Largura' placeholder='Largura (max 160cm)' min={1} max={160} onChange={(e) => {
                                                setOrder({ ...order, Width: e.target.value })
                                                if (order.Height !== '') setTotal(calculate(order.Height, e.target.value, order.Material, order.Amount))
                                            }} required></input>
                                        </div>
                                        :
                                        <div className='shop-form'>
                                            <input type='number' name='Altura' placeholder='2000cm' disabled></input>
                                            <input type='number' name='Largura' placeholder='85cm' disabled></input>
                                        </div>
                                }

                                <p>Material</p>
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
                                    <option value='Vinil branco mate green'>Vinil branco mate green</option>
                                    <option value='Vinil transparente green'>Vinil transparente green</option>
                                    <option value='Vinil monométrico green'>Vinil monométrico green</option>
                                    <option value='Lona coated blackback 450g green'>Lona coated blackback 450g green</option>
                                    <option value='Tela / canvas green'>Tela / canvas green</option>
                                    <option value='Rollup branco mate 420g'>Rollup branco mate 420g</option>
                                    <option value='Papel de parede wallcover PVC free'>Papel de parede wallcover PVC free</option>
                                    <option value='Papel de parede spray e up (cola adesiva no verso) PVC free'>Papel de parede spray e up (cola adesiva no verso) PVC free</option>
                                    <option value='Papel 200g green'>Papel 200g green</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' onChange={(e) => { setOrder({ ...order, Printing: e.target.value }) }} required>
                                    <option value='Frente'>Frente</option>
                                </select>
                                <select type='select' name='Cores' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>Cores</option>
                                    <option value='Preto e branco'>Preto e branco</option>
                                </select>

                                <p>Quantidade</p>
                                <input type='number' min='1' name='Quantidade' defaultValue='1' placeholder='Quantidade *' onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    if (order.Height !== '' && order.Width !== '') setTotal(calculate(order.Height, order.Width, order.Material, parseInt(e.target.value)))
                                    else if (order.Material === 'Rollup branco mate 420g') setTotal(calculate(order.Height, order.Width, order.Material, parseInt(e.target.value)))
                                }} required></input>

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
                                    <input disabled={false} type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        let test = order.PromoCode.split('').slice(-6).join('').toUpperCase()
                                        console.log(`Check: ${test}`)
                                        if (test === '_AEGIA') {
                                            setTotal(calculate(order.Height, order.Width, order.Material, order.Amount))
                                            alert('Cupão aplicado com sucesso!')
                                        }
                                        else {
                                            alert('Cupão inválido.')
                                        }
                                    }}>Aplicar</div>
                                </div>
                                <p style={{ fontWeight: '500' }}>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Total' value={`${total}€`}></input>

                                <div>
                                    <p className='shop-required-fields'>IVA e custo de envio incluídos</p>
                                    <p className='shop-required-fields'>Campos obrigatórios *</p>
                                </div>

                                <input type='hidden' name='_captcha' value='false'></input>

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
