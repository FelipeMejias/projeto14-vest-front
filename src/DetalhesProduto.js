import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function  DetalhesProduto({respostaLogin}){
    const navigate=useNavigate()
    const [detalhes,setDetalhes]=useState({})
    const parametro=useParams()
    const {idItem}=parametro
    const [selecionado,setSelecionado]=useState('')
    function buscarItem(){
    
        const promessa=axios.get(`http://localhost:5007/itens/${idItem}`)
        promessa.then(res=>{setDetalhes(res.data);definirEscolhas(res.data)})
        promessa.catch(()=>console.log('erro no get'))
      } 
      function adicionarAoCarrinho(){
    
        const promessa=axios.post(`http://localhost:5007/carrinho`,detalhes,
        {headers: {"token": respostaLogin.token}})
        promessa.then(res=>navigate('/carrinho'))
        promessa.catch((e)=>console.log(e))
      } 
    const {foto,nome,valor}=detalhes
    const  tamanhos=['P','M','G']
    const  numeros=['37','38','39','40','41']
    const  cores=['red','orange','yellow','green','blue','purple']
    const [colorido,setColorido]=useState() 
    const [lista,setLista]=useState([])
    function definirEscolhas(obj){
        switch(obj.utensilio){
            case 'camisa':setLista(tamanhos);setColorido(false);break;
            case 'calcado':setLista(numeros);setColorido(false);break;
            case 'bola':setLista(cores);setColorido(true);break;}
        }
    const escolhas=(
            lista?.map(str=>{
                if(colorido){return(
                    <Caixinha  onClick={()=>setSelecionado(str)} borda={selecionado==str?'black':'#8e8e8e'} cor={str}>
                    </Caixinha>
                )}else{return(
                    <Caixinha onClick={()=>setSelecionado(str)} cor={selecionado==str?'#019700':'#8e8e8e'} borda={selecionado==str?'#016B00':'#6b6b6b'}>
                        {str}
                    </Caixinha>
                )}
                
            })
        )
        const [carrinhoContemItem,setCarrinhoContemItem]=useState(false)
    function checarCarrinho(){
            const promessa=axios.get(`http://localhost:5007/carrinho/${idItem}`,
            {headers: {"token": respostaLogin.token}})
            promessa.then(res=>setCarrinhoContemItem(res.data))
            promessa.catch((e)=>console.log(e))
    }
    function removerDoCarrinho(){
        const promessa=axios.delete(`http://localhost:5007/carrinho/${idItem}`,
        {headers: {"token": respostaLogin.token}})
        promessa.then(res=>navigate('/carrinho'))
        promessa.catch((e)=>console.log(e))
}


    useEffect(()=>{buscarItem();checarCarrinho()},[])
return (
    <>
        <Caixa>       
            <img src={foto} />
            
            <div>
                <ul>{escolhas}</ul>
            </div>
            <div><h1>{nome}</h1></div>
            <p>{valor} $</p>       
        </Caixa>
        {carrinhoContemItem?
        <Botao onClick={()=>{removerDoCarrinho()}}>Remover do carrinho</Botao>:
        <Botao onClick={()=>{adicionarAoCarrinho()}}>Adicionar ao carrinho</Botao>}
    </>
    )
}
const Caixa=styled.div`
ul{display:flex}
div{display:flex;justify-content:center;align-items:center;}
    width:calc(100% - 20px);height:70vh;box-sizing:border-box;
background-color:white;margin:10px;
border-radius:10px;
display:flex;flex-direction:column;
align-items:center;justify-content:space-evenly;
h1{font-size:40px}
p{font-weight:700;font-size:30px}
img{width:280px}
@media(min-width:614px){width:554px}
`
const Caixinha=styled.div`cursor: pointer; 
background-color:${props=>props.cor};border:4px solid ${props=>props.borda};width:40px;height:40px;border-radius:3px;margin-right:7px;margin-left:7px;font-size:18px;font-weight:600;box-sizing:border-box;
`
const Botao=styled.button`cursor: pointer; 
width:250px;height:80px;border-radius:5px;
font-size:20px;background-color:#016B00;color:white;
margin:10px;border:0;

`