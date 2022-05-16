import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import styled from 'styled-components'

import Home from './Home'
import Topo from './Topo'
import BarraSelecao from './BarraSelecao'
import Inserir from './Inserir'
import DetalhesProduto from './DetalhesProduto';
import BarraBusca from './BarraBusca';
import SignUp from './SignUp'
import MainPage from './MainPage'
import Carrinho from './Carrinho'

import logo from './logo.svg';

import './reset.css'
import './App.css';

  

function App() {  
  const [barraSelecao,setBarraSelecao]=useState(false)
  const [barraBusca,setBarraBusca]=useState(false)
  const [resposta,setResposta]=useState(false)
  const [inserir,setInserir]=useState({esporte:'',utensilio:''})
  const [respostaLogin,setRespostaLogin]=useState({})
  return (
    <BrowserRouter>
      <Topo setResposta={setResposta} setBarraBusca={setBarraBusca} barraBusca={barraBusca} setBarraSelecao={setBarraSelecao} barraSelecao={barraSelecao}/>
      <Container>
        {barraSelecao?<BarraSelecao setResposta={setResposta} setInserir={setInserir} inserir={inserir}/>:<></>}
        {barraBusca?<BarraBusca setResposta={setResposta}/>:<></>}
        <Routes>

          <Route path='/inserir' element={<Inserir setInserir={setInserir} inserir={inserir}/>}/>
          <Route path='/itens' element={<Home resposta={resposta} setResposta={setResposta} barraBusca={barraBusca} barraSelecao={barraSelecao}/>}/>
          <Route path="/" element={<MainPage setRespostaLogin={setRespostaLogin} />} />
          <Route path="/sign-up" element={<SignUp />} />
          
          <Route path='/carrinho' element={<Carrinho respostaLogin={respostaLogin}/>}/>
          <Route path='/itens/:idItem' element={<DetalhesProduto respostaLogin={respostaLogin}/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container=styled.div`
background-color:#019700;
margin-top:10vh;height:90vh;
display:flex;flex-direction:column;align-items:center;
`

export default App;
