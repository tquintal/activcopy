import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'

export default function CookieConsentLM() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div className='thank-you-view-content' style={{ width: '80%', paddingTop: '5%', paddingBottom: '5%' }}>
                <Link to='/' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                {
                    document.cookie === 'i18next=pt' ?
                        <>
                            <h2>Política de Cookies:</h2>
                            <p>O website da Activcopy utiliza cookies e outros ficheiros parecidos a cookies para melhorar a qualidade do website e dos serviços prestados ao cliente. Os cookies usados pela Activcopy, não recolhem informações pessoais que permitam identificar o utilizador, guardando apenas informações genéricas, designadamente, a forma e/ou local de acesso do utilizador e o modo como usa os Websites. Os cookies retêm apenas informação relacionada com as preferências do Utilizador. Descrevem-se, de seguida, os cookies utilizados pelo nosso website:</p>
                            <ul>
                                <li>Cookies permanentes: São cookies que ficam armazenados ao nível do browser dos seus dispositivos eletrónicos de acesso (PC, mobile e tablet) e que são utilizados sempre que faz uma nova visita ao site da Activcopy. São utilizados, geralmente, para direcionar a navegação aos interesses do utilizador.</li>
                                <li>Cookies de sessão: São cookies temporários que permanecem no arquivo de cookies do navegador até sair do website, pelo que não fica qualquer registo no disco rígido do utilizador. A informação recolhida por estes cookies serve para analisar padrões de tráfego do site.</li>
                                <li>Cookies de análise: São cookies que não recolhem ou armazenam informações pessoais do utilizador (por exemplo, nome ou endereço), pelo que não podem ser usadas para identificar os utilizadores. Pelo contrário, consistem em cookies que permitem quantificar o número de utilizadores e realizar a medição e análise estatística de como os utilizadores usam o serviço.</li>
                            </ul>
                            <p>As Cookies permitem à Activcopy prestar um serviço mais personalizado, identificar problemas, fornecer uma melhor experiência de navegação e melhorar o fornecimento de produtos que disponibilizamos.</p>
                        </> :
                        <>
                            <h2>Cookie Policy:</h2>
                            <p>Activcopy's website uses cookies and other cookie-like files to improve the quality of the website and customer services. The cookies used by Activcopy do not collect any personal information, it only stores generic information such as how and/or where you access and use the Websites. Cookies only retain information relating to your preferences. The following describes the cookies used by our website:</p>
                            <ul>
                                <li>Permanent cookies: These are cookies that are stored at the browser level of your electronic access devices (PC, mobile and tablet) and are used every time you visit Activcopy's website again. They are generally used to target browsing to your interests.</li>
                                <li>Session cookies: These are temporary cookies that remain in the cookie file of your browser until you leave the site, so no record is left on your hard drive. The information collected by these cookies is used to analyze site traffic patterns.</li>
                                <li>Analysis cookies: These are cookies that do not collect or store any personal information about the user (e.g., name or address), so they cannot be used to identify users. Rather, they are cookies that enable us to quantify the number of users and carry out statistical measurement and analysis of how users use the service.</li>
                            </ul>
                            <p>Cookies enable Activcopy to provide a more personalized service, identify problems, provide a better browsing experience and improve the delivery of products that we offer.</p>
                        </>
                }
            </div>
        </div>
    )
}
