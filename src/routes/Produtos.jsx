
import '../css/produtos.css'
import Basquete from '../assets/bola-basquete.jpg'
import AdidasTenis from '../assets/tenis-adidas.jpg'
import Brasil from '../assets/uniforme-brasil.jpg'
import BolsaNike from '../assets/bolsa-nike.jpg'
import Futebol1 from '../assets/bola-futebol1.webp'
import Futebol2 from '../assets/bola-futebol2.webp'
import FutebolAmericano from '../assets/bola-futebol-americano.webp'
import BolaTenis from '../assets/bola-tenis.jfif'
import CamisaArsenal from '../assets/camisa-arsenal.webp'
import CamisaBarcelona from '../assets/camisa-barcelona.webp'
import CamisaInter from '../assets/camisa-inter.webp'
import CamisaRealMadrid from '../assets/camisa-real-madrid.webp'
import TenisCorrida1 from '../assets/tenis-corrida-1.webp'
import TenisCorrida2 from '../assets/tenis-corrida-2.png'
import TenisCorrida3 from '../assets/tenis-corrida-3.png'
import TenisCorrida4 from '../assets/tenis-corrida-4.jfif'



const Produtos=()=>{

    return(
        <>
            <main className = "produtos">
                <h1>Conheça nossos produtos</h1>
                <br></br>
                <p>Descubra o melhor em equipamentos, roupas e acessórios esportivos. Se você busca qualidade e inovação para melhorar seu desempenho, temos tudo o que você precisa. Explore nossa seleção e atinja seus objetivos com confiança!</p>
            </main>

        <div className='card'>
            <img src= {Basquete} alt="" />
            <h2>Bola de Basquete - NBA Authentic Wilson</h2>
            <p>R$ 299,99 à vista</p>
        </div>

        <div className='card'>
            <img src={AdidasTenis} alt="" />
            <h2>Tênis Adidas UltraBoost 23 Light - Preto</h2>
            <p>R$ 699,99 à vista</p>
        </div>

        <div className='card'>
            <img src={Brasil} alt="" />
            <h2>Camisa Nike Brasil I - 2022/2023 - Torcedor</h2>
            <p>R$ 199,99 no Pix (-33%)</p>
        </div>

        <div className='card'>
            <img src={BolsaNike} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={Futebol1} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={Futebol2} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={FutebolAmericano} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={BolaTenis} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={CamisaArsenal} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={CamisaBarcelona} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={CamisaInter} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={CamisaRealMadrid} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={TenisCorrida1} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={TenisCorrida2} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={TenisCorrida3} alt="" />
            <h2></h2>
            <p></p>
        </div>

        <div className='card'>
            <img src={TenisCorrida4} alt="" />
            <h2></h2>
            <p></p>
        </div>
        </>
    )
}

export default Produtos