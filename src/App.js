import { useState } from 'react';
import Banner from './Banner/Banner';
import Formulario from './Formulario';
import Time from './Time';
import Footer from './Footer';
import Title from './Title';




function App() {

  const times = [
    {
      nome:''
    },
    {
      nome: 'Programação',
      corPrimaria: 'rgba(87, 194, 120, 1)',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: 'rgba(130, 207, 250, 1)',
      corSecundaria: 'rgba(232, 255, 255, 1)'
    },
    {
      nome: 'Data Science',
      corPrimaria: 'rgba(166, 209, 87, 1)',
      corSecundaria: 'rgba(233, 255, 227, 1)'
    },
    {
      nome: 'Devops',
      corPrimaria: 'rgba(224, 107, 105, 1)',
      corSecundaria: 'rgba(241, 97, 101, 0.15)'
    },
    {
      nome: 'UX e Design',
      corPrimaria: 'rgba(219, 110, 191, 1)',
      corSecundaria: 'rgba(220, 110, 190, 0.15)'
    },
    {
      nome: 'Mobile',
      corPrimaria: 'rgba(255, 186, 5, 1)',
      corSecundaria: 'rgba(255, 186, 5, 0.15)'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'rgba(255, 138, 41, 1)',
      corSecundaria: 'rgba(255, 140, 42, 0.15)'
    }
  ]
  
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    
  }

  const colorTitulo = '#6278F7'

  return (
    <div className="App">
      <Banner />

      <Formulario  times={times?.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Title />
      {times?.map(time => <Time 
        key={time.nome}  
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      
      />)}
      
      <Footer />
    </div>
  );
}

export default App;
