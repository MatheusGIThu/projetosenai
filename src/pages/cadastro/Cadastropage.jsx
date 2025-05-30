import { useState } from "react";
import './Cadastropage.css';

function Cadastropage() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [mensagemConf, setMensagemConf] = useState(""); // Aqui, fora do handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confSenha) {
      setMensagemConf("Erro: as senhas são diferentes");
      return;
    }

    const novoCadastro = {
      usuario,
      email,
      senha,
    };

    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastros.push(novoCadastro);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    setUsuario("");
    setEmail("");
    setSenha("");
    setConfSenha("");

    setMensagemConf("Cadastro efetuado com sucesso");
  };

  return (
    <div className="central">
      <h2>Cadastro</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="usuario">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="senha">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="confsenha">
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confSenha}
              onChange={(e) => setConfSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>

          {mensagemConf && (
            <p
              className={
                mensagemConf.includes("sucesso")
                  ? "mensagem-sucesso"
                  : "mensagem-erro"
              }
            >
              {mensagemConf}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Cadastropage;
