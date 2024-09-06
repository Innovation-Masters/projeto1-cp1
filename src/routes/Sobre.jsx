
import SobreEsporte from '../assets/esporte.jpg'
import '../css/sobre.css'

const Sobre=()=>{

    return(
        <>
            <main className='sobre'>
                <h2>Sobre Nós</h2>
                <section className='bem-vindo'>
                    <p>Bem-vindo à Sport Masters, onde a paixão por se encontra com a excelência em atendimento. Nossa missão é oferecer produtos de alta qualidade para nossos clientes e com preço acessível. Estamos comprometidos em ajudar o cliente de todas as formas possíveis, garantindo que cada compra seja uma experiência satisfatória e segura.</p>
                    <p>A equipe da Sport Masters é composta por profissionais dedicados e competentes. Juntos, trabalhamos para trazer boas experiências aos clientes com nossos produtos que atendem aos mais altos padrões de qualidade. Nossos clientes são a nossa prioridade. Nosso atendimento ao cliente está sempre pronto para ajudar com qualquer dúvida ou necessidade.</p>
                    <p>Acreditamos em fazer a diferença não apenas através de nossos produtos, mas também através de nossas práticas sustentáveis e de responsabilidade social. Estamos envolvidos em projetos para algumas ORGS, e trabalhamos para deixar um impacto positivo na comunidades.</p>
                </section>
                <section className='obrigado'>
                    <p>Obrigado por escolher Sport Masters. Estamos ansiosos para atendê-lo!</p>
                    <img src={SobreEsporte} alt="Imagem Esporte" />
                </section>
            </main>
        </>
    )
}

export default Sobre