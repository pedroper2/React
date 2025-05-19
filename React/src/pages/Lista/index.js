import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import {useNavigate} from 'react-rouder-dom'
import './styles.css'

function PaginaListaUsuarios () {
    const navigate = useNavigate ();

    return (
        <div className='pagina-lista-usuarios'>
            <div>
            <h2> Lista de usuarios</h2>
            <ListaDeUsuarios/>
            <button onClick={() => navigate ('/')} className='link- voltar' >
                Cadastrar usuario
            </button>
            </div>

        </div>
    )
}

export default PaginaListaUsuarios