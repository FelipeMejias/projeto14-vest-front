import { useEffect } from 'react'
import styled from 'styled-components'
import Produtinho from './Produtinho'

export default function  Home({resposta,buscarItens}){
    
    useEffect(()=>{buscarItens()},[])
    return (
        <Div>
            {resposta?resposta.map(obj=> <Produtinho detalhes={obj}/> ):<></>}
        </Div>
    )
}
const Div=styled.div`
display:flex;flex-wrap:wrap;width:100%;
align-items:center;justify-content:center;
`
