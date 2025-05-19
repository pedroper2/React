// src/components/ListaDeUsuarios/index.js

import  {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function ListaDeUsuarios () {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:8080/usuarios");
                setUsuarios(response.data);
            } catch (error) {
                alert("Erro ao carregar usuários: ", error);
            }
        }
        carregarUsuarios();
    }, []);
        return (
            <ul id= "ListaUsuarios" className='lista-usuarios'>
                {usuarios.length === 0 ? (
                    <li> Nenhum usuario encontrado</li>
                ) : (
                    usuarios.map (usuario => (
                        <li key ={usuario.id } > 
                        <p> <strong>Nome:</strong> </p>
                        <p> <strong>Email:</strong> </p>
                        <p> <strong>Senha:</strong> </p>
                        </li>
                    
                    ))
                )}
            </ul>
        )
}

export default ListaDeUsuarios;