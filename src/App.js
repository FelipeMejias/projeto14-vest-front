import logo from './logo.svg';
import './App.css';
import './reset.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import styled from 'styled-components'

import Home from './Home'
import Topo from './Topo'
import BarraSelecao from './BarraSelecao'
import Inserir from './Inserir'
import DetalhesProduto from './DetalhesProduto';
import BarraBusca from './BarraBusca';

function App() {  
  const [barraSelecao,setBarraSelecao]=useState(false)
  const [barraBusca,setBarraBusca]=useState(false)
  const [resposta,setResposta]=useState(false)
  const [inserir,setInserir]=useState({esporte:'',utensilio:''})
  return (
    <BrowserRouter>
      <Topo setResposta={setResposta} setBarraBusca={setBarraBusca} barraBusca={barraBusca} setBarraSelecao={setBarraSelecao} barraSelecao={barraSelecao}/>
      <Container>
        {barraSelecao?<BarraSelecao setResposta={setResposta} setInserir={setInserir} inserir={inserir}/>:<></>}
        {barraBusca?<BarraBusca setResposta={setResposta}/>:<></>}
        <Routes>

          <Route path='/inserir' element={<Inserir setInserir={setInserir} inserir={inserir}/>}/>
          <Route path='/itens' element={<Home resposta={resposta} setResposta={setResposta}/>}/>
          <Route path='/itens/:idItem' element={<DetalhesProduto />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container=styled.div`
background-color:#019700;
margin-top:10vh;
display:flex;flex-direction:column;align-items:center;
`

export default App;
