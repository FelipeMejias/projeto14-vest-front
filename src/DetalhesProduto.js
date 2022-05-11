import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function  DetalhesProduto(){
    const [detalhes,setDetalhes]=useState({})
    const parametro=useParams()
    const {idItem}=parametro
    function buscarItem(){
    
        const promessa=axios.get(`http://localhost:5007/itens/${idItem}`)
        promessa.then(res=>setDetalhes(res.data))
        promessa.catch(()=>console.log('erro no get'))
      } 
    
    const {foto,nome,valor}=detalhes
    useEffect(()=>{buscarItem()},[])
return (
    <>
        <Caixa>       
            <img src={foto} />
            <div><h1>{nome}</h1></div>
            <p>{valor} $</p>       
        </Caixa>
        <Botao onClick={()=>{}}>Adicionar ao carrinho</Botao>
    </>
    )
}
const Caixa=styled.div`

div{display:flex;flex-direction:column;align-items:center;width:70%}
    width:calc(100% - 20px);height:70vh;box-sizing:border-box;
background-color:white;margin:10px;
border-radius:10px;
display:flex;flex-direction:column;
align-items:center;justify-content:space-evenly;
h1{font-size:40px}
p{font-weight:700;font-size:30px}
img{width:280px}
`
const Botao=styled.button`
width:250px;height:100px;border-radius:5px;
font-size:20px;background-color:#016B00;color:white;
margin:10px

`