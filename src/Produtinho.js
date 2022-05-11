import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function  Produtinho({detalhes}){
    const navigate=useNavigate()
    const {foto,nome,valor}=detalhes
    function abrirProduto(){
        navigate(`/itens/${nome.split(' ').join('')}`)
    }
return (
    <Caixa onClick={()=>abrirProduto()}>
                    
        <img src={foto} />
        <div><h1>{nome}</h1></div>
        <p>{valor} $</p>
                    
    </Caixa>)
}
const Caixa=styled.div`

div{display:flex;flex-direction:column;align-items:center;width:70%}
    width:190px;height:210px;box-sizing:border-box;
background-color:white;margin:10px;
border-radius:10px;
display:flex;flex-direction:column;
align-items:center;justify-content:space-evenly;
p{font-weight:700;font-size:20px}
img{width:140px}
`