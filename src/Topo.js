import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function  Topo({setBarraSelecao,barraSelecao,barraBusca,setBarraBusca,setResposta}){
    const navigate=useNavigate()
    function buscarItens(){
    
        const promessa=axios.get(`http://localhost:5007/itens`)
        promessa.then(res=>setResposta(res.data))
        promessa.catch(()=>console.log('erro no get'))
      }  
    return (
        <Div>
            <div>
                <button onClick={()=>{setBarraSelecao(!barraSelecao);setBarraBusca(false)}}><ion-icon name="menu-outline"></ion-icon></button>
                <button onClick={()=>{setBarraSelecao(false);setBarraBusca(!barraBusca);navigate('/itens');}}><ion-icon name="search-outline"></ion-icon></button>

                <button onClick={()=>{navigate('/itens');buscarItens()}}><ion-icon name="home-outline"></ion-icon></button>
                <button onClick={()=>navigate('/inserir')}><ion-icon name="construct-outline"></ion-icon></button>
                
                
                <button ><ion-icon name="cart-outline"></ion-icon></button>
                
            </div>
        </Div>
    )
}
const Div=styled.div`
background-color:#016b00;
display:flex;justify-content:center;align-items:center;
position:fixed;top:0;
width:100%;height:10vh;
div{width:90%;display:flex;justify-content:space-between}
button{background-color:#016b00;border:0;cursor: pointer; }
ion-icon{font-size:30px;color:white}
@media(min-width:614px){div{width:540px}}
`
