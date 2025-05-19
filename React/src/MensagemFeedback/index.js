import './styles.css';

function MensagemFeedback ({mensagem, tipo, visivel, onclose}) {
    if (visivel) {
        return null
    }
    return (
    <div
    id ="mensagem-feedback"
    className={`mensagem-feedback ${tipo}`}
    onClick={onclose}
    >
        {mensagem}

    </div>
    )
}

export default MensagemFeedback;