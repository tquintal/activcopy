import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiArrowBack } from 'react-icons/bi'

export default function TermsAndConditions() {
    const { t } = useTranslation()
    return (
        <div className='thank-you-view'>
            <div className='thank-you-view-content' style={{ width: '80%', paddingTop: '5%', paddingBottom: '5%' }}>
                <Link to='/' className='thank-you-back'><BiArrowBack /><p>{t('Service.Back')}</p></Link>
                <h2>Termos e condições de venda</h2>
                <h3>1. Produtos disponíveis para compra</h3>
                <p>A zona de "Comprar Online" do site destina-se apenas e só a facultar a possibilidade aos clientes de comprarem produtos de forma a os receberem numa morada de destino. Caso o cliente pretenda levantar a compra em loja terá de contactar a empresa via email: activcopy@netcabo.pt.</p>
                <p>O site dispõe de 5 produtos disponíveis para compra online: canecas; cartões de visita; t-shirt; flyers; grandes formatos (vinil, lona, tela, roll-ups, papel de parede).</p>
                <p>Não está disponível qualquer possibilidade de criação de uma conta de cliente no site. Todas as informações do cliente são inseridas apenas e só no formulário de compra, e são referentes a uma compra individual. Numa segunda compra, o cliente terá que inserir novamente os seus dados.</p>
                <p>Todos os preços finais dos Produtos exibidos no site são expressos em euros e contemplam IVA e valores de envio.</p>
                <p>Os preços dos Produtos podem estar sujeitos a alterações periódicas. Se o preço de um produto mudar no dia seguinte ao de uma compra, essa compra não sofrerá qualquer tipo de alteração. </p>
                <p>Todas as imagens relativas a produtos que acompanham os formulários de compra, são de inteiro direito da Activcopy, e por isso não podem ser utilizadas pelos clientes.</p>
                <p>Os Serviços apenas preveem a entrega dos Produtos dentro do território português, deste modo, não podem ser usados para entregas de Produtos fora deste território.</p>
                <h3>2. Formulário de Compra</h3>
                <p>No formulário de compra o cliente tem disponíveis opções de formato, tipos de material, zonas de impressão, tipos de impressão, cores de impressão, quantidades, dimensões e acabamentos. A escolha destas opções é da inteira responsabilidade do cliente.</p>
                <p>Abaixo das opções de customização, encontra-se um espaço reservado para o cliente inserir a sua informação pessoal: Nome, email, contacto, morada, NIF. O cliente é inteiramente responsável por verificar os dados inseridos, ortografia e grafismos das informações carregadas.</p>
                <p>Existe também uma secção para o cliente dar upload da imagem que pretende que seja impressa no produto. Assim como uma opção para o cliente inserir um link que redirecione a um site terceiro onde seja possível fazer o download dos documentos/imagens que pretenda que sejam impressos, neste caso, possibilitando o download de documentos com tamanho maior que 1mb. Todas as imagens e documentos inseridos no formulário são de inteira responsabilidade do cliente, assim como o seu conteúdo.</p>
                <p>O cliente tem disponível um espaço para comentários, onde pode inserir detalhes extra ao seu pedido, não contemplados nas opções do formulário de compra. Caso esses detalhes envolvam uma mudança no preço final da compra, a Activcopy entrará em contacto com o cliente, e o processo será continuado via email. </p>
                <p>Por fim, existe uma opção para o cliente inserir um código promocional. Estas promoções não se podem acumular, podendo apenas usar-se uma vez por produto/compra. Os cupões só se podem utilizar em pedidos realizados no site. Reservamo-nos o direito de não aplicar as promoções a alguns dos nossos produtos. Os códigos promocionais são tornados públicos nas redes sociais da Activcopy.</p>
                <p>Caso os ficheiros submetidos pelo cliente não estejam conforme as dimensões necessárias, a Activcopy entrará em contacto com o cliente, ou efetuará as alterações necessárias (apenas em situações em que a transformação da dimensão de imagem não afete a mesma estruturalmente) de forma a que seja possível fazer a impressão.</p>
                <p>Todos os dados submetidos pelos clientes nos formulários de compra serão reservados pela Activcopy e terão apenas e só, o objetivo de servir o processo de compra.</p>
                <h3>3. Processo de compra e pagamento</h3>
                <p>Após completar o formulário e clicar no botão de "Comprar Online", o cliente será direcionado para uma página onde estarão disponíveis todas as informações relativas ao pagamento.</p>
                <p>Só após pagamento via transferência bancária, e envio do respetivo comprovativo de pagamento para ao email seractivcopy@hotmail.com, é que a compra está efetivamente apta a ser processada pela Activcopy.</p>
                <p>O cliente possui apenas de 48h uteis para efetuar a transferência bancária e enviar o comprovativo de pagamento. Após 48h sem o cumprimento de estes requisitos, a Activcopy considera o pedido como expirado, e por isso terminado.</p>
                <p>A Activcopy reserva o direito de não prosseguir com qualquer encomenda a seu exclusivo critério. Isto também pode acontecer se:</p>
                <ul>
                    <li>os dados fornecidos pelo Utilizador ao preencher o formulário da encomenda estiverem incompletos ou incorretos;</li>
                    <li>o cliente não satisfizer os requisitos para implementar as condições de pagamento;</li>
                    <li>os Produtos encomendados não estiverem disponíveis.</li>
                </ul>
                <p>Nos casos acima indicados, a Activcopy informará o cliente por e-mail de que a proposta de encomenda não foi aceite, especificando os motivos e que, portanto, o contrato não foi concluído. Neste caso, a Activcopy devolverá ao cliente quaisquer valores já pagos por este último, ou ajustará um novo valor para proceder a uma compra com conteúdo distinto.</p>
                <p>A fatura será enviada para o cliente via email após o envio do produto para a morada de destino.</p>
                <p>Após recebimento do comprovativo de pagamento, expeto casos em que a compra obrigue a comunicações posteriores para esclarecimentos, a Activcopy vê-se impedida de conseguir cancelar o processo.</p>
                <h3>4. Tempos de execução e de entrega</h3>
                <p>Após recebimento do comprovativo de pagamento, em média, a Activcopy demora 2 a 3 dias uteis para fazer chegar o produto à morada de destino.</p>
                <p>Produtos em muitas quantidades terão tempos de resposta diferentes, assim como preços de envio mais elevados. Aquando destas situações, a Activcopy entrará em contacto com o cliente para informar as datas e valores previstos.</p>
                <p>A Activcopy utiliza a transportadora CTT para enviar os seus produtos.</p>
                <h3>5. Isenção de responsabilidade</h3>
                <p>A seleção dos conteúdos e imagens a imprimir, bem como a aquisição das autorizações relativas para a sua reprodução, são da responsabilidade exclusiva dos clientes. A Activcopy não procederá, em circunstância alguma, à verificação do conteúdo, exceto relativamente às especificações técnicas e à compatibilidade gráfica com as especificações exigidas. A Activcopy não pode de forma alguma ser responsabilizada pelo uso não autorizado de imagens por parte dos clientes e por qualquer tipo de violação de direitos de terceiros sobre eles.</p>
                <p>A Activcopy reserva o direito de bloquear quaisquer encomendas que envolvam uma clara violação de direitos de propriedade intelectual de terceiros ou cujo conteúdo seja difamatório, violento ou contrário à ordem pública e bons costumes.</p>
                <p>O cliente declara conhecer e compromete-se a respeitar as especificações técnicas presentes no site, em relação à composição e uso permitido dos materiais que compõem os produtos. O cliente assume total responsabilidade a este respeito e por isso exonera a Activcopy, comprometendo-se também a isentá-la de qualquer responsabilidade, incluindo danos materiais ou imateriais, pela utilização indevida dos produtos ou não conformidade com as especificações técnicas dos mesmos por parte do cliente ou de terceiros.</p>
                <p>No caso de erros de impressão não atribuíveis ao cliente ou à entrega de um produto defeituoso ou danificado, a Activcopy será obrigada a realizar apenas uma reimpressão do material, ou reembolsar o cliente.</p>
                <p>A Activcopy não será responsável, em circunstância alguma, por possíveis atrasos na entrega ou danos materiais causados no processo de entrega realizado por empresas de correios e transportadoras que são terceiros em relação à Activcopy. Os riscos relacionados com os produtos passam para o cliente no momento da entrega dos produtos aos correios.</p>
                <p>No momento da entrega, o cliente é obrigado a examinar cuidadosamente os produtos recebidos. Quaisquer defeitos nas mercadorias entregues ou embalagem do material não atribuíveis ao cliente, devem ser comunicados imediatamente ao correio.</p>
                <p>O cliente pode rescindir da sua compra apenas e só antes de enviar o comprovativo de pagamento. Caso queira cancelar a compra posteriormente ao envio do comprovativo, terá de entrar em contacto com a Activcopy para confirmar se a encomenda não começou a ser processada, e por isto impossível de cancelar.</p>
            </div>
        </div>
    )
}
