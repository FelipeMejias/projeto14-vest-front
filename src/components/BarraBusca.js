import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
export default function  BarraBusca({setResposta}){
    const [valorBusca,setValorBusca]=useState('')
    function buscar(valor){
        
        const promessa=axios.get(`http://localhost:5007/busca/${valor}`)
    promessa.then(res=>setResposta(res.data))
    promessa.catch(()=>console.log('erro no get'))
    }
    return(
        <Tudo>
            <input placeholder='Buscar...' value={valorBusca}
            onChange={e=>{
                setTimeout(()=>buscar(e.target.value),500)
                setValorBusca(e.target.value)}} />
        </Tudo>
    )
}
const Tudo=styled.div`
background-color:#016b00;
height:6vh;
display:flex;justify-content:center;align-items:center;
width:100%;
input{
    font-size:18px;color:white;margin-bottom:5px;height:20px;border:0;
padding:5px;background-color:#013f00;border-radius:5px}
`