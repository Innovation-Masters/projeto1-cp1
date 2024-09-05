
const Contato=()=>{

    return(
        <>
            <main>
                <div className="titulo">
                    <h2>Quer falar com a gente?</h2>
                    <p>Entre em contato conosco pelo formulário abaixo para podermos conversar!</p>
                </div>
                <section>
                    <div className="fale-conosco">
                        <form className="form" id="form">
                            <h3>Formulário de Contato</h3>

                            <div className="info">
                                <label for="username">Nome:</label>
                                <input type="text" id="username" required placeholder="Digite seu nome"/>
                            </div>

                            <div className="info">
                                <label for="username">Email:</label>
                                <input type="email" id="email" required placeholder="Digite seu email"/>
                            </div>

                            <div className="info">
                                <label for="message">Observações:</label>
                                <textarea id="message" name="message" rows="4" placeholder="Digite a sua Observação"></textarea>
                            </div>

                            <button type="submit">ENVIAR</button>

                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contato