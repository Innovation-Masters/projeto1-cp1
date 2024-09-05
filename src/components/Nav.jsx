import '../css/nav.css'
import { Link } from 'react-router-dom'

const Nav=()=>{

    return(
        <>
            <header>
                <div className='header-items'>
                    <a href="#">
                        <h1>Logo</h1>
                    </a>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/produtos">Produtos</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/contato">Contato</Link>
                    </nav>
                </div>
            </header>
        </>
    )        
}

export default Nav