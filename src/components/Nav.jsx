import '../css/nav.css'
import { Link } from 'react-router-dom'

const Nav=()=>{

    return(
        <header>
            <h1>Sport Masters</h1>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/produtos">Produtos</Link>
                        <Link to="/sobre">Sobre</Link>
                    </ul>
                    <div>
                        <img src="../src/assets/heart.png" alt="icone de itens favoritos" />
                        <img src="../src/assets/user.png" alt="icone para acesso ao perfil" />
                        <Link to="/contato">Contato</Link>
                    </div>
                </nav>
        </header>
    )        
}

export default Nav