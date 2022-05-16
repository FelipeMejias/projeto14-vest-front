import { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Produtinho from './Produtinho'

export default function  Home({resposta,setResposta,barraBusca,barraSelecao}){
    function buscarItens(){
    
        const promessa=axios.get(`http://localhost:5007/itens`)
        promessa.then(res=>setResposta(res.data))
        promessa.catch(()=>console.log('erro no get'))
      }  
    function calcularAltura(){
        if(barraBusca){return 84}
        if(barraSelecao){return 74}
        return 90
    }
    useEffect(()=>{buscarItens()},[])
    return (
        
        <Div altura={calcularAltura}>
            {resposta?resposta.map(obj=> <Produtinho detalhes={obj}/> ):<></>}
        </Div>
        
    )
}
const Div=styled.div`
display:flex;flex-wrap:wrap;
justify-content:flex-start;
height:${props=>props.altura}vh;
margin-left:10px;
@media(min-width:614px){width:590px}
@media(max-width:614px){width:calc(100% - 20px)}
overflow:hidden;overflow-y:scroll;
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #019700; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #03cc00; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #03cc00; 
  }
`
