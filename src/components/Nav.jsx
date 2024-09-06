import '../css/nav.css'
import { Link } from 'react-router-dom'

const Nav=()=>{

    return(
        <>
            <header>
                <div className='header-items'>
                    <Link to='/'>
                        <h1>Logo</h1>
                    </Link>
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