import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import BCards from '../../assets/b-cards.jpg'

export default function Mugs() {

    const { t } = useTranslation()

    const [order, setOrder] = useState({
        Format: '90mm x 210mm',
        Material: 'Caneca branca',
        Printing: 'Cores',
        Amount: '1',
        Name: '',
        EMail: '',
        Contact: '',
        Address: '',
        NIF: '',
        PromoCode: '',
        File: false,
        Note: '',
        Total: '16€'
    })

    const [ok, setOk] = useState(false)

    const [total, setTotal] = useState(16)

    let cTotal = 0

    const calculate = (material, qt) => {
        cTotal = 0

        switch (material) {
            case 'Caneca branca':
                cTotal = 9
                break
            case 'Caneca mágica preta':
                cTotal = 13.5
                break
            default:
                cTotal = 14
        }

        cTotal = cTotal * qt

        if (order.PromoCode === 'activ10')
            cTotal = cTotal * 0.9

        return roundUp(cTotal, 2) + 7
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
                            <h1>Canecas</h1>
                            <div className='shop-cat-img'>
                                <img src={BCards} alt='b-cards' onClick={() => console.table(order)} style={{ height: '124%' }} />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/tomas.quintal@gmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='Nova encomenda de canecas em activcopy.pt'></input>
                                <input type='hidden' name='Encomenda' value='Canecas'></input>

                                <p>Formato</p>
                                <select type='select' name='Formato' onChange={(e) => { setOrder({ ...order, Format: e.target.value }) }} required>
                                    <option value='90mm x 210mm'>90mm x 210mm</option>
                                </select>

                                <p>Material</p>
                                <select type='select' name='Material' onChange={(e) => {
                                    setOrder({ ...order, Material: e.target.value })
                                    setTotal(calculate(e.target.value, order.Amount))
                                }} required>
                                    <option value='Caneca branca'>Caneca branca</option>
                                    <option value='Caneca mágica preta'>Caneca mágica preta</option>
                                    <option value='Caneca fluorescente amarela'>Caneca fluorescente amarela</option>
                                    <option value='Caneca fluorescente laranja'>Caneca fluorescente laranja</option>
                                    <option value='Caneca fluorescente verde'>Caneca fluorescente verde</option>
                                    <option value='Caneca fluorescente vermelha'>Caneca fluorescente vermelha</option>
                                </select>

                                <p>Impressão</p>
                                <select type='select' name='Impressão' onChange={(e) => { setOrder({ ...order, PrintingColor: e.target.value }) }} required>
                                    <option value='Cores'>Cores</option>
                                    <option value='Preto e branco'>Preto e branco</option>
                                </select>

                                <p>Quantidade *</p>
                                <input type='number' name='Quantidade' placeholder='Quantidade *' defaultValue={1} min={1} onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value })
                                    setTotal(calculate(order.Material, e.target.value))
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
                                    <input type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        if (order.PromoCode === 'activ10') {
                                            setTotal(calculate(order.Material, order.Amount))
                                            alert('Cupão aplicado com sucesso!')
                                        } else {
                                            alert('Erro, cupão inválido.')
                                        }
                                    }}>Aplicar</div>
                                </div>
                                <p style={{ fontWeight: '500' }}>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Valor' value={`${total}€`}></input>

                                <div>
                                    <p className='shop-required-fields'>IVA e valor de envio incluídos</p>
                                    <p className='shop-required-fields'>Campos obrigatórios *</p>
                                </div>

                                <input type='hidden' name='_captcha' value='false'></input>

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
