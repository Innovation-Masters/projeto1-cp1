import '../css/footer.css'

const Footer=()=>{

    return(
        <>
            <footer>
                <div className="footer-direitos">
                    <p>Nome da Empresa - Checkpoint 4</p>
                    <p>Innovation Masters - @2024-Todos os direitos reservados</p>
                </div>
                <nav>
                    <div className="footer-info">
                        <ul>
                            <h2>Integrantes</h2>
                            <li>
                                <span>Renan Dias Utida</span>
                            </li>
                            <li>
                                <span>Leonardo Rocha</span>
                            </li>
                            <li>
                                <span>Murilo Justi</span>
                            </li>
                            <li>
                                <span>Fabricio Carlos</span>
                            </li>
                            <li>
                                <span>Gustavo Melanda</span>
                            </li>
                        </ul>
                        <ul>
                            <h2>Links Rápidos</h2>
                            <li>
                                <span className='link-hover'>Home</span>
                            </li>
                            <li>
                                <span className='link-hover'>Produtos</span>
                            </li>
                            <li>
                                <span className='link-hover'>Sobre</span>
                            </li>
                            <li>
                                <span className='link-hover'>Contato</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-logo">
                        <a href="#">Logo</a>
                    </div>
                </nav>
                <div className="footer-local">
                    <p>Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 01311-000</p>
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