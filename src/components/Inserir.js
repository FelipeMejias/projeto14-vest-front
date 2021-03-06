import axios from 'axios';import styled from 'styled-components'
import { useState } from 'react';
export default function Inserir({inserir,setInserir}){
    const [foto,setFoto]=useState('')
    const [nome,setNome]=useState('')
    const [valor,setValor]=useState('')
    async function  salvar(){
        
        try{await axios.post('http://localhost:5007/itens',{
            foto,nome,valor,
            esporte:inserir.esporte,
            utensilio:inserir.utensilio
        })
        setFoto('');setNome('');setValor('');setInserir({esporte:'',utensilio:''})
    }catch{console.log('eita falhou')} 
    }
    return(
        <Caixa>
            <h1>esporte: {inserir.esporte}</h1>
            <h1>utensilio: {inserir.utensilio}</h1>
            <input value={foto} onChange={e=>setFoto(e.target.value)} placeholder='foto'></input>
            <input value={nome} onChange={e=>setNome(e.target.value)} placeholder='nome'></input>
            <input value={valor} onChange={e=>setValor(e.target.value)} placeholder='valor'></input>
            <button onClick={salvar}>Inserir</button>
        </Caixa>
    )
}
const Caixa=styled.div`
h1{font-size:20px;color:white}
height:75vh;width:100%;display:flex;flex-direction:column;
justify-content:space-evenly;align-items:center;
input{width:420px;height:45px;border-radius:5px;font-size:20px}
button{border:0;cursor: pointer; width:250px;height:80px;border-radius:5px;font-size:20px;background-color:#016B00;color:white}
`