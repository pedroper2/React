// src/components/FormularioCadastro/index.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css' ;
import logo from 'assets/logo.png' ;
import MensagemFeedback from 'MensagemFeedback' ;

function FormularioCadastro () {
    const [nome, setNome] = useState ('');
    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');

    const navigate = useNavigate ();
    const {mostrarMensagem, mensagem, tipoMensagem, visivel, fecharMensagem}= useMensagem ();
    const cadastroUsuario = async (event) => {
        try {
            const response = await axios.post ('http://localhost:8080/usuarios', {nome,email, senha});
            mostrarMensagem (response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso');
            setNome ('');
            setEmail ('');
            setSenha ('');
        }
        catch (error) {
            let erroMsg =  "Erro ao concectar ao servidor.";
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem || 'Erro ao cadastrar usuário.';
             if (error.response.data.erros){
                erroMsg += '' + Object.values (error.response.data.erros).join (',');
            }
            mostrarMensagem (erroMsg, 'erro');
            }
        }
    }
    return (
        <div className="container">
            <div className="formulario-cadastro">
                <img src={logo} alt="Logo" />
                <h1>Cadastro</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    cadastroUsuarios();
                }}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>

                <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                    Ver usuários cadastrados
                </button>
                
                <MensagemFeedback 
                    mensagem={mensagem} 
                    tipoMensagem={tipoMensagem} 
                    visivel={visivel} 
                    onClose={fecharMensagem} 
                />

            </div>
            
        </div>
    )
}

export default FormularioCadastro;