import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Produtinho from './Produtinho'

export default function  Carrinho({respostaLogin}){
    const [respostaCarrinho,setRespostaCarrinho]=useState([])
    function buscarItens(){
    
        const promessa=axios.get(`http://localhost:5007/carrinho`,{
            headers: {
                "token": respostaLogin.token
            }
        })
        promessa.then(res=>setRespostaCarrinho(res.data))
        promessa.catch(()=>console.log('erro no get'))
      }  
    useEffect(()=>{buscarItens()},[])
    return (
        <Div>
            {respostaCarrinho?respostaCarrinho.map(obj=> <Produtinho detalhes={obj}/> ):<></>}
        </Div>
    )
}
const Div=styled.div`
display:flex;flex-wrap:wrap;width:100%;
align-items:center;justify-content:center;
@media(min-width:700px){width:700px}
`
