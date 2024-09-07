import Atletas from '../assets/atletas.jpg'
import Basquete from '../assets/bola-basquete.jpg'
import AdidasTenis from '../assets/tenis-ultraboost.jpg'
import Brasil from '../assets/uniforme-brasil.jpg'
import BolsaNike from '../assets/bolsa-nike.jpg'
import EsporteGeral from '../assets/esporte-geral.jpg'
import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {
  return (
    <>
        <main className='home'>
            <section className='image-container'>
                <img src={Atletas} alt="Imagem Atletas" />
                <div className="text-overlay">
                    <h2>Conforto e desempenho para atletas de todos os níveis. <br /> Explore agora nossos produtos!</h2>
                    <Link to='/produtos'>
                        <button className='btn'>Ver Produtos</button>
                    </Link>
                </div>
            </section>

            <div class="colecao-calcados">
                <h2>OS POPULARES DA LOJA</h2>
            </div>
            {/*Seção com cards -->*/}
            <section class="secao4">
                <div class="secao4-div">
                    {/* Card 1 */}
                    <div class="card">
                        <img decoding="async" src={Basquete} alt="Bola de Basquete Wilson" />
                        <h3>Bola de Basquete NBA Authentic - Wilson</h3>
                        <p>Bolas</p>
                        <h4>R$ 299,90 à vista</h4>
                        <Link to='/produtos'><button id="comprar">Saiba Mais</button></Link>
                    </div>

                    {/* Card 2 */}
                    <div class="card">
                        <img decoding="async" src={AdidasTenis} alt="Adidas UltraBoost 23" />
                        <h3>Tênis Adidas UltraBoost 23 Light - Preto</h3>
                        <p>Tênis</p>
                        <h4>R$ 699,90 à vista</h4>
                        <Link to='/produtos'><button id="comprar">Saiba Mais</button></Link>
                    </div>

                    {/* Card 3 -->*/}
                    <div class="card">
                        <img decoding="async" src={Brasil} alt="Camisa Nike Brasil I 2022"/>
                        <h3>Camisa Nike Brasil I 2022/23 - Torcedor</h3>
                        <p>Camisa de Time</p>
                        <h4>R$ 199,90 no Pix (-33%)</h4>
                        <Link to='/produtos'><button id="comprar">Saiba Mais</button></Link>
                    </div>

                    {/* Card 4 */}
                    <div class="card">
                        <img decoding="async" src={BolsaNike} alt="Bolsa Nike Brasilia"/>
                        <h3>Bolsa Nike Brasilia Unissex</h3>
                        <p>Acessórios</p>
                        <h4>R$ 189,90 à vista</h4>
                        <Link to='/produtos'><button id="comprar">Saiba Mais</button></Link>
                    </div>
                </div>
            </section>
            <section className='esporte-geral'>
                <Link to='/produtos'>
                    <img src={EsporteGeral} alt="Esporte Geral" />
                </Link>
                <div className='conheca'>
                    <h2>A sua jornada no esporte começa aqui!</h2>
                    <h2>Venha para a loja que é referência no Brasil.</h2>
                </div>
            </section>
        </main>
    </>
  );
}

export default Home;