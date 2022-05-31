import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'

export default function PrivacyPolicies() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div className='thank-you-view-content' style={{ width: '80%', paddingTop: '5%', paddingBottom: '5%' }}>
                <Link to='/' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                <h2>Política de privacidade</h2>
                <p>Nos termos do RGPD, dados Pessoais são qualquer informação, de qualquer natureza e em qualquer suporte, relativa a uma pessoa singular identificada ou identificável. É considerada identificável a pessoa que possa ser identificada direta ou indiretamente, por exemplo através do nome, do n.º de identificação, de um dado de localização ou outros elementos que permitam chegar à identificação dessa pessoa singular.</p>
                <p>A Política de Privacidade da Activcopy tem o intuito de atingir a excelência em relação com o cumprimento do Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016, relativo à proteção das pessoas singulares no que diz respeito a dados pessoais e à livre circulação destes dados.</p>
                <p>Nesse sentido, a Activcopy reger-se-á pelos seguintes princípios:</p>
                <ul>
                    <li>Licitude, lealdade e transparência: os dados pessoais serão tratados de maneira lícita, leal e transparente em relação com o interessado.</li>
                    <li>Limitação da finalidade: os dados pessoais serão recolhidos com fins determinados, explícitos e legítimos, e não serão tratados posteriormente de maneira incompatível com esses fins.</li>
                    <li>Minimização de dados: os dados pessoais serão adequados, pertinentes e limitados ao necessário em relação com os fins para os que são tratados.</li>
                    <li>Limitação do prazo de conservação: os dados pessoais serão mantidos de forma que se permita a identificação dos interessados durante não mais tempo do necessário para os fins do tratamento dos dados pessoais.</li>
                    <li>Integridade e confidencialidade: os dados pessoais serão tratados de tal maneira que se garanta uma segurança adequada mesmos, incluída a proteção contra o tratamento não autorizado ou ilícito e contra a sua perda, destruição ou dano acidental, mediante a aplicação de medidas técnicas ou organizativas.</li>
                </ul>
                <p>Os tratamentos de dados pessoais deverão ter um fundamento jurídico que os legitime, o qual poderá ser, entre outros:</p>
                <ul>
                    <li>Consentimento: quando tiver o seu consentimento expresso, por escrito, oralmente ou através da validação de uma opção; e prévio e se esse consentimento for livre, informado, específico e inequívoco.</li>
                    <li>Execução de contrato e diligências pré-contratuais: quando o tratamento de dados pessoais seja necessário para a celebração, execução e gestão do contrato celebrado com a Activcopy, como por exemplo para utilização do website, pedidos de informação, preparação de proposta de serviços, prestação de serviços, gestão de contactos/reclamações, faturação/cobrança/pagamentos;</li>
                    <li>Cumprimento de obrigação legal: quando o tratamento de dados pessoais seja necessário para cumprir uma obrigação legal a que a Activcopy esteja sujeita, como por exemplo a comunicação de dados a entidades policiais, judiciais, fiscais ou reguladoras;</li>
                    <li>Interesse legítimo: quando o tratamento de dados pessoais corresponda a um interesse legítimo da Activcopy ou de terceiros, como por exemplo melhoria de qualidade de serviço e deteção de fraude</li>
                </ul>
                <p>Em cumprimento com a Lei Orgânica de Proteção de Dados de Carácter Pessoal nº 15/1.1999, de 13 de dezembro de 1999, a Activcopy informa que os dados pessoais introduzidos pelos seus clientes são guardados e tratados com um programa automatizado. Esses dados são necessários para a realização e envio de qualquer compra feita no nosso site. A Activcopy não fornecerá os dados dos seus clientes a terceiros nem os usará para nenhum outro fim diferente ao indicado. </p>
                <p>Toda a informação recolhida pela Activcopy restringe-se apenas e só à informação disponibilizada pelo cliente nos formulários de compra do Site: Nome, email, contacto, morada e NIF. A Activcopy assegura que todos os dados recolhidos no site serão apenas e só visualizados e analisados pela Activcopy.</p>
                <p>A utilização do site está condicionada ao acordo do usuário com os termos e condições de venda, política de privacidade e política de cookies que regulam a venda dos produtos disponíveis em www.activcopt.pt.</p>
                <p>O utilizador compromete-se a usar o site segundo a Lei, as Condições Gerais, a moral, os bons costumes e a ordem pública. O usuário deverá usar este serviço sem incorrer em atividades que possam ser consideradas ilícitas ou ilegais, contrárias ao estabelecido nestas condições gerais.</p>
                <p>A Activcopy reserva-se direito de negar diretamente, em qualquer momento e sem necessidade de pré-aviso, o acesso de qualquer usuário a esta página ou a alguma parte da mesma, quando ocorrerem incumprimentos das circunstâncias descritas neste documento.</p>
                <p>Todas as gravuras, designs, ícones, gráficos, fotografias, imagens e quaisquer outros elementos que façam parte das secções "Inicio" e "Comprar Online" do site, são propriedade exclusiva da Activcopy, e salvo indicação em contrário, não podem ser utilizados, nem totalmente nem parcialmente, nem serem copiados, reproduzidos, transferidos, publicados ou distribuídos de qualquer forma sem o consentimento prévio por escrito da Activcopy. Estes elementos foram desenhados com o propósito de oferecer a promoção e venda dos nossos produtos. A cópia, distribuição, modificação, transmissão, reutilização ou o uso destes elementos não supõe a transferência de nenhum direito sobre os mesmos.</p>
                <p>Activcopy reserva-se o direito de rever, alterar, ou simplesmente atualizar, no todo ou em parte, à sua inteira discrição, seja de que forma for e/ou em qualquer momento, sem aviso prévio, a presente Política em matéria de Privacidade, nomeadamente, em virtude de alterações legislativas ou regulamentares em matéria de proteção dos dados pessoais.</p>
                <p>Não existem hiperligações para outros sites terceiros à Activcopy. A presente política é apenas e só aplicável ao site www.activcopy.pt</p>
                <p>A zona de "Comprar Online" do site não é destinada à utilização por crianças com idade inferior a 16 anos.</p>
                <p>Para quaisquer questões relativas a política de privacidade e termos e condições de venda o cliente pode contactar: seractivcopy@hotmail.com</p>
            </div>
        </div>
    )
}
