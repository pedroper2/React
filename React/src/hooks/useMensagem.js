import { useState, use, useCallback } from "react";


function UseMensagem () {
    const [mensagem, setMensagem] = useState ('')
    const [tipoMensagem, setTiopoMensagem] = useState ('')
    const [visivel, setVisivel] = useState ('')

    const exibirMensagem = useCallback ((texto, tipo = 'sucesso') => {
        setMensagem (texto)
        setTiopoMensagem (tipo)
        setVisivel (true)
        setTimeout (()=> setVisivel (false), 5000)
    }, [])

    const fecharMensagem = useCallback (()=> {
        setVisivel (false)
    }, [])
    return {mensagem ,tipoMensagem ,visivel ,exibirMensagem ,fecharMensagem}
}

export default UseMensagem