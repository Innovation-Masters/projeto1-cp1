import '../css/error.css'
import EmojiError from '../assets/error-404.png'

const Error=()=>{

    return(
        <main className="error">
            <h1>Error 404 - Page Not Found!</h1>
            <img src={EmojiError} alt="error-404" />
        </main>
    )
}

export default Error