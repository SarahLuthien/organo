import './CampoTexto.css'


const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` //exemplo de como colocar um parametro com caracteres. Faz concatecação com template string

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return(
        <div className='campo-texto'>
            <label>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder = {placeholderModificada} />

        </div>
    )


}


export default CampoTexto