import '../css/footer.css'
import { Link } from 'react-router-dom'

const Footer=()=>{

    return(
        <>
            <footer>
                <div className="footer-direitos">
                    <p>Sport Masters - Checkpoint 4</p>
                    <p>Innovation Masters - @2024-Todos os direitos reservados</p>
                </div>
                <nav>
                    <div className="footer-info">
                        <ul>
                            <h2>Integrantes</h2>
                            <li>Renan Dias Utida</li>
                            <li>Leonardo Rocha</li>
                            <li>Murilo Justi</li>
                            <li>Fabricio Carlos</li>
                            <li>Gustavo Melanda</li>
                        </ul>
                        <div className='links-rapidos'>
                            <h2>Links Rápidos</h2>
                            <Link to="/">Home</Link>
                            <Link to="/produtos">Produtos</Link>
                            <Link to="/sobre">Sobre</Link>
                            <Link to="/contato">Contato</Link>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <Link to='/'>Sport Masters</Link>
                    </div>
                </nav>
                <div className="footer-local">
                    <p>Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 00000-000</p>
                    <div className='phone'>
                        <h3>Telefone: </h3>
                        <p>(11) 91234-5678</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer