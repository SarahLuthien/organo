import './Colaborador.css'


const Colaborador = ({nome, imagem, cargo, corDoCard}) => {

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDoCard}}>
            <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
              <h4>{nome}</h4>  
              <h5>{cargo}</h5>
            </div>
        </div>
    )

}

export default Colaborador