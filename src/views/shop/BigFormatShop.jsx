import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

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
        NIF: '',
        PromoCode: '',
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

        if (order.PromoCode === 'activ10')
            cTotal = cTotal * 0.9

        return roundUp(cTotal, 2)
    }

    const setOrderCompleted = () => {
        if (order.Material === 'Rollup branco mate 420g') {
            order.Width = 'Rollup'
            order.Height = 'Rollup'
        }
        if (order.Width === '' || order.Height === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || order.File !== true) {
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
                                <img src={BCards} alt='b-cards' onClick={() => console.table(order)} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='Nova encomenda de grandes formatos em activcopy.pt'></input>
                                <input type='hidden' name='Encomenda' value='Grandes formatos'></input>

                                <p>Formato (cm)</p>
                                {
                                    order.Material !== 'Rollup branco mate 420g' ?
                                        <div className='shop-form'>
                                            <input type='number' name='Altura' placeholder='Altura (min 50cm)' min={50} onChange={(e) => {
                                                setOrder({ ...order, Height: e.target.value })
                                                if (order.Width !== '') setTotal(calculate(order.Width, e.target.value, order.Material, order.Amount))
                                            }} required></input>
                                            <input type='number' name='Largura' placeholder='Largura (max 160cm)' min={1} max={160} onChange={(e) => {
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
                                    <option value='Vinil branco mate'>Vinil branco mate</option>
                                    <option value='Vinil transparente'>Vinil transparente</option>
                                    <option value='Vinil monomérico'>Vinil monomérico</option>
                                    <option value='Lona coated 440g branco mate'>Lona coated 440g branco mate</option>
                                    <option value='Tela / canvas'>Tela / canvas</option>
                                    <option value='Rollup branco mate 420g'>Rollup branco mate 420g</option>
                                    <option value='Papel de parede wallcover'>Papel de parede wallcover</option>
                                    <option value='Papel de parede spray e up (cola adesiva no verso)'>Papel de parede spray e up (cola adesiva no verso)</option>
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
                                            setTotal(calculate(order.Height, order.Width, order.Material, order.Amount))
                                            : alert('Error')
                                    }}>Aplicar</div>
                                </div>
                                <p>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Total' value={`${total}€`}></input>

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
