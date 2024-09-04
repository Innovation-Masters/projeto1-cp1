import '../css/nav.css'

const Nav=()=>{

    return(
        <>
            <header>
                <div className='header-items'>
                    <a href="#">
                        <h1>Logo</h1>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Produtos</a>
                            </li>
                            <li>
                                <a href="">Sobre</a>
                            </li>
                            <li>
                                <a href="">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )        
}

export default Nav