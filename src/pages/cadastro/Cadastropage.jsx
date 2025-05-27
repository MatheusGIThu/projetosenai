function Cadastropage(){
    return(
        <div>
            <h3>Cadastro</h3>
            <div className="form">
                <form>
                    <div className="usuario">
                        <input type="text" placeholder="Usuário"/>
                    </div>
                    <div className="email">
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="senha">
                        <input type="password" placeholder="Senha"/>
                    </div>
                    <div className="confsenha">
                        <input type="password" placeholder="Confirmar senha"/>
                    </div>                
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastropage;
