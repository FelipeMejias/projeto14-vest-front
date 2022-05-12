import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Home from './Home'
import Topo from './Topo'
import BarraSelecao from './BarraSelecao'
import Inserir from './Inserir'
import DetalhesProduto from './DetalhesProduto';
import SignUp from './SignUp'
import MainPage from './MainPage'

import logo from './logo.svg';

import './reset.css'
import './App.css';
function App() {
  function buscarItens(selecoes){
    
    const promessa=axios.get(`http://localhost:5007/itens${construirQuery(selecoes)}`)
    promessa.then(res=>setResposta(res.data))
    promessa.catch(()=>console.log('erro no get'))
  }  
  function construirQuery(selecoes=detalhesBusca){
    let query='?'
    if(selecoes.esporte){query+=`esporte=${selecoes.esporte}`;
    if(selecoes.utensilio){query+=`&utensilio=${selecoes.utensilio}`}
  }else if(selecoes.utensilio){query+=`utensilio=${selecoes.utensilio}`
  }else{return ''}return query}

    
  const [barraSelecao,setBarraSelecao]=useState(false)
  const [detalhesBusca,setDetalhesBusca]=useState({})
  
  const [resposta,setResposta]=useState(false)
   

  useEffect(()=>{buscarItens()},[])
  return (
    <BrowserRouter>
      
      <Topo setBarraSelecao={setBarraSelecao} barraSelecao={barraSelecao}/>
      {barraSelecao?<BarraSelecao buscarItens={buscarItens} detalhes={detalhesBusca} setDetalhes={setDetalhesBusca}/>:<></>}

      <Container>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path='/inserir' element={<Inserir detalhes={detalhesBusca} setDetalhes={setDetalhesBusca}/>}/>
          <Route path='/itens' element={<Home buscarItens={buscarItens} resposta={resposta} />}/>
          <Route path='/itens/:idItem' element={<DetalhesProduto />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container=styled.div`
background-color:#019700;
display:flex;flex-direction:column;align-items:center;

`


export default App;
