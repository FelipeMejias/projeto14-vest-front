import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Produtinho from './Produtinho'

export default function  Carrinho({respostaLogin}){
    const [respostaCarrinho,setRespostaCarrinho]=useState([])
    const [total,setTotal]=useState()
    function buscarItens(){
    
        const promessa=axios.get(`http://localhost:5007/carrinho`,{
            headers: {
                "token": respostaLogin.token
            }
        })
        promessa.then(res=>{setRespostaCarrinho(res.data.itens);setTotal(res.data.total)})
        promessa.catch(()=>console.log('erro no get'))
      } 
       
    useEffect(()=>{buscarItens()},[])
    return (
        <>
        <Div>
            {respostaCarrinho?respostaCarrinho.map(obj=> <Produtinho detalhes={obj}/> ):<></>}
        </Div>
        <Pagar>
            <h1>Total a pagar: {total} $</h1>
        </Pagar>
        </>
    )
}
const Pagar=styled.div`
background-color:#016B00;
display:flex;justify-content:center;align-items:center;
position:fixed;bottom:0;
width:100%;height:10vh;
h1{color:white;font-size:25px}

`
const Div=styled.div`
display:flex;flex-wrap:wrap;width:100%;

@media(min-width:614px){width:614px};
height:80vh;
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
