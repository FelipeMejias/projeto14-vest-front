import { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Produtinho from './Produtinho'

export default function  Home({resposta,setResposta}){
    function buscarItens(){
    
        const promessa=axios.get(`http://localhost:5007/itens`)
        promessa.then(res=>setResposta(res.data))
        promessa.catch(()=>console.log('erro no get'))
    }  
    useEffect(()=>{buscarItens()},[])
    return (
        <Div>
            {resposta?resposta.map(obj=> <Produtinho detalhes={obj}/> ):<></>}
        </Div>
    )
}
const Div=styled.div`
display:flex;flex-wrap:wrap;
align-items:center;justify-content:center;
@media(min-width:700px){width:700px}
`
