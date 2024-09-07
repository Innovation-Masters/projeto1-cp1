import '../css/produtos.css'
import { Link } from 'react-router-dom'
import BolaBasquete from '../assets/bola-basquete.jpg'
import BolaTenis from '../assets/bola-tenis-wilson.jpg'
import BolaAdidas from '../assets/bola-adidas-euro.jpg'
import FutebolAmericano from '../assets/bola-futebol-americano.jpg'
import TenisUltraboost from '../assets/tenis-ultraboost.jpg'
import TenisDunk from '../assets/tenis-dunk-nike.jpg'
import TenisRevolution from '../assets/tenis-revolution-nike.jpg'
import TenisNmd from '../assets/tenis-nmd-adidas.jpg'
import CamisaArsenal from '../assets/camisa-arsenal.jpg'
import CamisaBarcelona from '../assets/camisa-barcelona.jpg'
import CamisaReal from '../assets/camisa-real-madrid.jpg'
import CamisaBrasil from '../assets/uniforme-brasil.jpg'
import AcessorioLuva from '../assets/acessorio-luva.jpg'
import AcessorioMergulho from '../assets/acessorio-mergulho.jpg'
import AcessorioGarrafa from '../assets/acessorio-garrafa.jpg'
import AcessorioBolsa from '../assets/bolsa-nike.jpg'



const Produtos=()=>{

    return(
        <>
            <main className = "produtos">
                <div className='conheca-prod'>
                    <h1>Conheça nossos produtos</h1>
                    <p>Descubra o melhor em equipamentos, roupas e acessórios esportivos. Se você busca qualidade e inovação para melhorar seu desempenho, temos tudo o que você precisa. Explore nossa seleção e atinja seus objetivos com confiança!</p>
                </div>

                <div className="subtitulo-prod">
                    <h2>Bolas Esportivas</h2>
                </div>
                {/*Cards Bolas-->*/}
                <section className="secao">
                    <div className="secao-div">
                        {/* Card 1 */}
                        <div className="card-produto">
                            <img decoding="async" src={FutebolAmericano} alt="Bola Futebol Americano - Nike"/>
                            <h3>Bola Futebol Americano All-Field 3.0</h3>
                            <p>Bolas</p>
                            <h4>R$ 189,99 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 2 */}
                        <div className="card-produto">
                            <img decoding="async" src={BolaTenis} alt="Bola de Tênis - Wilson" />
                            <h3>Bola Tênis Championship Wilson - 3 unidades</h3>
                            <p>Bolas</p>
                            <h4>R$ 69,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 3 -->*/}
                        <div className="card-produto">
                            <img decoding="async" src={BolaAdidas} alt="Bola Eurocopa - Adidas"/>
                            <h3>Bola de Futebol Adidas Euro 2024 - Branco</h3>
                            <p>Bolas</p>
                            <h4>R$ 239,90 no Pix</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 4 */}
                        <div className="card-produto">
                            <img decoding="async" src={BolaBasquete} alt="Bola de Basquete Wilson" />
                            <h3>Bola de Basquete NBA Authentic - Wilson</h3>
                            <p>Bolas</p>
                            <h4>R$ 299,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>
                    </div>
                </section>

                <div className="subtitulo-prod">
                    <h2>Calçados Mais Procurados</h2>
                </div>
                {/*Cards Calçados-->*/}
                <section className="secao">
                    <div className="secao-div">
                        {/* Card 1 */}
                        <div className="card-produto">
                            <img decoding="async" src={TenisDunk} alt="Bola de Basquete Wilson" />
                            <h3>Tênis Nike Dunk Low Black</h3>
                            <p>Tênis</p>
                            <h4>R$ 749,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 2 */}
                        <div className="card-produto">
                            <img decoding="async" src={TenisUltraboost} alt="Adidas UltraBoost 23" />
                            <h3>Tênis Adidas UltraBoost 23 - Preto</h3>
                            <p>Tênis</p>
                            <h4>R$ 699,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 3 -->*/}
                        <div className="card-produto">
                            <img decoding="async" src={TenisRevolution} alt="Camisa Nike Brasil I 2022"/>
                            <h3>Tenis Nike Revolution 6 Black</h3>
                            <p>Tênis</p>
                            <h4>R$ 299,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 4 */}
                        <div className="card-produto">
                            <img decoding="async" src={TenisNmd} alt="Bolsa Nike Brasilia"/>
                            <h3>Tênis Adidas NMD_R1 - Preto</h3>
                            <p>Tênis</p>
                            <h4>R$ 519,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>
                    </div>
                </section>

                <div className="subtitulo-prod">
                    <h2>Camisas de Time de Futebol</h2>
                </div>
                {/*Cards Bolas-->*/}
                <section className="secao">
                    <div className="secao-div">
                        {/* Card 1 */}
                        <div className="card-produto">
                            <img decoding="async" src={CamisaArsenal} alt="Bola de Basquete Wilson" />
                            <h3>Adidas Camisa 1 Arsenal 2024/25</h3>
                            <p>Camisa de Time</p>
                            <h4>R$ 349,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 2 */}
                        <div className="card-produto">
                            <img decoding="async" src={CamisaBarcelona} alt="Adidas UltraBoost 23" />
                            <h3>Camisa Barcelona I 22/23 Torcedor - Nike</h3>
                            <p>Camisa de TIme</p>
                            <h4>R$ 249,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 3 -->*/}
                        <div className="card-produto">
                            <img decoding="async" src={CamisaReal} alt="Bolsa Nike Brasilia"/>
                            <h3>Adidas Camisa 1 Real Madrid 24/25</h3>
                            <p>Camisa de Time</p>
                            <h4>R$ 349,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 4 */}
                        <div className="card-produto">
                            <img decoding="async" src={CamisaBrasil} alt="Camisa Nike Brasil I 2022"/>
                            <h3>Camisa Nike Brasil I 2022/23 - Torcedor</h3>
                            <p>Camisa de Time</p>
                            <h4>R$ 199,99 no Pix (-33%)</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>
                    </div>
                </section>

                <div className="subtitulo-prod">
                    <h2>Acessórios Esportivos</h2>
                </div>
                {/*Cards Bolas-->*/}
                <section className="secao">
                    <div className="secao-div">
                        {/* Card 1 */}
                        <div className="card-produto">
                            <img decoding="async" src={AcessorioLuva} alt="Bola de Basquete Wilson" />
                            <h3>Luva Adidas Predator Accuracy Pro Own - Futebol</h3>
                            <p>Acessórios</p>
                            <h4>R$ 269,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 2 */}
                        <div className="card-produto">
                            <img decoding="async" src={AcessorioMergulho} alt="Adidas UltraBoost 23" />
                            <h3>Máscara Óculos Mergulho Snorkel Vidro Temperado</h3>
                            <p>Acessórios</p>
                            <h4>R$ 79,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 3 -->*/}
                        <div className="card-produto">
                            <img decoding="async" src={AcessorioGarrafa} alt="Camisa Nike Brasil I 2022"/>
                            <h3>Garrafa Esportiva Gatorade Cinza - 900mL</h3>
                            <p>Acessórios</p>
                            <h4>R$ 229,90 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>

                        {/* Card 4 */}
                        <div className="card-produto">
                            <img decoding="async" src={AcessorioBolsa} alt="Bolsa Nike Brasilia"/>
                            <h3>Bolsa Nike Brasilia Unissex</h3>
                            <p>Acessórios</p>
                            <h4>R$ 189,99 à vista</h4>
                            <Link to='/produtos'><button id="comprar-produto">Comprar</button></Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Produtos