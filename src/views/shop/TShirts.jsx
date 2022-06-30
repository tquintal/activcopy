import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { roundUp } from '../../utils'
import { motion } from 'framer-motion'
import ShopBack from '../../components/ShopBack'
import TShirtsIMG from '../../assets/in-shop-t_shirts.jpg'

export default function TShirtSize() {

    const { t } = useTranslation()

    const [order, setOrder] = useState({
        TShirt: 'T-Shirt Adulto 100% algodão',
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
        NIF: '',
        PromoCode: '',
        File: false,
        Note: '',
        Total: 11.5
    })

    const [ok, setOk] = useState(false)

    const [total, setTotal] = useState(11.5)

    let cTotal = 0

    const calculate = (material, color, printing, quantity) => {
        cTotal = 4

        if (material === 'T-Shirt Orgânica 100% algodão')
            cTotal += 1

        if (color !== 'Branco')
            cTotal += 1

        for (const key in printing) {
            if (printing[key])
                if (key === 'FrenteCentro' || key === 'CostasCentro')
                    cTotal += 3.5
                else
                    cTotal += 3
        }

        cTotal *= parseInt(quantity)

        if (order.PromoCode === 'activ15' && order.TShirt === 'T-Shirt Criança 100% algodão')
            cTotal = cTotal * 0.85

        return roundUp(cTotal, 1) + 4
    }

    const TShirtSize = () => {
        if (order.TShirt === 'T-Shirt Adulto 100% algodão') {
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
        } else if (order.TShirt === 'T-Shirt Criança 100% algodão') {
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
        if (order.TShirt === 'T-Shirt Adulto 100% algodão') {
            return (
                <div className='shop-promo-code'>
                    <select type='select' name='Cor' style={{ width: '100%' }} onChange={(e) => {
                        setOrder({ ...order, Color: e.target.value })
                        setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                    }} defaultValue={order.Color} required>
                        <option value='Branco'>Branco</option>
                        <option value='Preto'>Preto</option>
                        <option value='Cinzento Escuro'>Cinzento Escuro</option>
                        <option value='Cinzento Claro'>Cinzento Claro</option>
                        <option value='Ash'>Ash</option>
                        <option value='Castanho'>Castanho</option>
                        <option value='Sand'>Sand</option>
                        <option value='Bordô'>Bordô</option>
                        <option value='Vermelho Escuro'>Vermelho Escuro</option>
                        <option value='Vermelho'>Vermelho</option>
                        <option value='Laranja'>Laranja</option>
                        <option value='Gold'>Gold</option>
                        <option value='Amarelo Solar'>Amarelo Solar</option>
                        <option value='Urban Khaki'>Urban Khaki</option>
                        <option value='Verde Garrafa'>Verde Garrafa</option>
                        <option value='Verde Escuro'>Verde Escuro</option>
                        <option value='Verde'>Verde</option>
                        <option value='Pistachio'>Pistachio</option>
                        <option value='Navy'>Navy</option>
                        <option value='Urban Navy'>Urban Navy</option>
                        <option value='Azul Cobalto'>Azul Cobalto</option>
                        <option value='Royal Blue'>Royal Blue</option>
                        <option value='Diva Blue'>Diva Blue</option>
                        <option value='Azul Turquesa'>Azul Turquesa</option>
                        <option value='Atol'>Atol</option>
                        <option value='Azul Céu'>Azul Céu</option>
                        <option value='Roxo'>Roxo</option>
                        <option value='Rosa'>Rosa</option>
                    </select>
                </div>
            )
        } else if (order.TShirt === 'T-Shirt Criança 100% algodão') {
            return (
                <div className='shop-promo-code'>
                    <select type='select' name='Cor' style={{ width: '100%' }} onChange={(e) => {
                        setOrder({ ...order, Color: e.target.value })
                        setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                    }} defaultValue={order.Color} required>
                        <option value='Branco'>Branco</option>
                        <option value='Preto'>Preto</option>
                        <option value='Cinzento Escuro'>Cinzento Escuro</option>
                        <option value='Cinzento Claro'>Cinzento Claro</option>
                        <option value='Bordô'>Bordô</option>
                        <option value='Vermelho Escuro'>Vermelho Escuro</option>
                        <option value='Laranja'>Laranja</option>
                        <option value='Gold'>Gold</option>
                        <option value='Verde Garrafa'>Verde Garrafa</option>
                        <option value='Verde Escuro'>Verde Escuro</option>
                        <option value='Real Green'>Real Green</option>
                        <option value='Navy'>Navy</option>
                        <option value='Royal Blue'>Royal Blue</option>
                        <option value='Atol'>Atol</option>
                        <option value='Azul Céu'>Azul Céu</option>
                        <option value='Rosa'>Rosa</option>
                    </select>
                </div>
            )
        } else {
            return (
                <div className='shop-promo-code'>
                    <select type='select' name='Cor' style={{ width: '100%' }} onChange={(e) => {
                        setOrder({ ...order, Color: e.target.value })
                        setTotal(calculate(order.TShirt, e.target.value, order.Printing, order.Amount))
                    }} defaultValue={order.Color} required>
                        <option value='Branco'>Branco</option>
                        <option value='Preto'>Preto</option>
                        <option value='Cinzento Escuro'>Cinzento Escuro</option>
                        <option value='Moca'>Moca</option>
                        <option value='Amarelo Solar'>Amarelo Solar</option>
                        <option value='Navy'>Navy</option>
                        <option value='Blue Fog'>Blue Fog</option>
                    </select>
                </div>
            )
        }
    }

    const setOrderCompleted = () => {
        if (order.Amount === '' || order.Name === '' || order.EMail === '' || order.Contact === '' || order.Address === '' || ok !== true) {
            alert(t('Shop.Error'))
        } else if (order.Printing.FrenteCentro !== true && order.Printing.CostasCentro !== true && order.Printing.FrentePeitoEsquerdo !== true && order.Printing.MangaEsquerda !== true && order.Printing.MangaDireita !== true) {
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
                            <h1>T-Shirts</h1>
                            <div className='shop-cat-img'>
                                <img src={TShirtsIMG} alt='b-cards' onClick={() => {
                                    setOrder({ ...order, Total: total })
                                }}
                                />
                            </div>
                        </div>
                        <div className='shop-cat-form-container'>
                            <form method='POST' action='https://formsubmit.co/seractivcopy@hotmail.com' encType='multipart/form-data' className='shop-form'>

                                <input type='hidden' name='_subject' value='ACTIVCOPY.PT - Detalhes da sua encomenda. Obrigado pela preferência.'></input>
                                <input type='hidden' name='Encomenda' value='T-Shirts'></input>

                                <p>T-Shirt</p>
                                <select type='select' name='TShirt' onChange={(e) => {
                                    setOrder({ ...order, TShirt: e.target.value, Size: e.target.value === 'T-Shirt Adulto 100% algodão' ? 'M' : e.target.value === 'T-Shirt Criança 100% algodão' ? '1-2' : 'M' })
                                    setTotal(calculate(e.target.value, order.Color, order.Printing, order.Amount))
                                }} required>
                                    <option value='T-Shirt Adulto 100% algodão'>T-Shirt Adulto 100% algodão</option>
                                    <option value='T-Shirt Criança 100% algodão'>T-Shirt Criança 100% algodão</option>
                                    <option value='T-Shirt Orgânica 100% algodão'>T-Shirt Orgânica 100% algodão</option>
                                </select>
                                <p>Tamanho</p>
                                <TShirtSize />
                                <p>Cor</p>
                                <TShirtColor />

                                <p>Zona de Impressão</p>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='Impressão' value='Frente Centro' defaultChecked={true} onChange={(e) => {
                                        order.Printing.FrenteCentro = !order.Printing.FrenteCentro
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='Impressão'> Frente centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='Impressão' value='Costas Centro' onChange={() => {
                                        order.Printing.CostasCentro = !order.Printing.CostasCentro
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='Impressão'> Costas centro</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='Impressão' value='Frente peito esquerdo' onChange={() => {
                                        order.Printing.FrentePeitoEsquerdo = !order.Printing.FrentePeitoEsquerdo
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='Impressão'> Frente peito esquerdo</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='Impressão' value='Manga esquerda' onChange={() => {
                                        order.Printing.MangaEsquerda = !order.Printing.MangaEsquerda
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='Impressão'> Manga esquerda</label><br></br>
                                </div>
                                <div className='shop-tshirts-printing'>
                                    <input type='checkbox' name='Impressão' value='Manga direita' onChange={() => {
                                        order.Printing.MangaDireita = !order.Printing.MangaDireita
                                        setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                    }}></input>
                                    <label htmlFor='Impressão'> Manga direita</label><br></br>
                                </div>

                                <p>Quantidade</p>
                                <input type='number' name='Quantidade' placeholder='Quantidade *' min={1} defaultValue='1' onChange={(e) => {
                                    setOrder({ ...order, Amount: e.target.value === '' ? 1 : e.target.value })
                                    setTotal(calculate(order.TShirt, order.Color, order.Printing, e.target.value === '' ? 1 : e.target.value))
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
                                    <input disabled={true} type='text' name='Promoção' placeholder='Código promocional' onChange={(e) => { setOrder({ ...order, PromoCode: e.target.value.toLowerCase() }) }}></input>
                                    <div onClick={() => {
                                        if (order.PromoCode === 'activ15' && order.TShirt === 'T-Shirt Criança 100% algodão') {
                                            setTotal(calculate(order.TShirt, order.Color, order.Printing, order.Amount))
                                            alert('Cupão aplicado com sucesso!')
                                        } else {
                                            if (order.PromoCode === 'activ15' && order.TShirt !== 'T-Shirt Criança 100% algodão') {
                                                alert('Este cupão é válido apenas para T-Shirts de criança.')
                                            } else {
                                                alert('Indisponível de momento')
                                            }
                                        }
                                    }}>Aplicar</div>
                                </div>
                                <p style={{ fontWeight: '500' }}>Total: {total}€</p>

                                {/* USER INFO */}
                                <input type='hidden' name='_cc' value={order.EMail}></input>
                                <input type='hidden' name='NIB' value='PT50 0033 0000 4534 1788 5440 5'></input>
                                <input type='hidden' name='Valor' value={`${total}€`}></input>

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
