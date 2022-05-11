import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function  Topo({setBarraSelecao,barraSelecao}){
    const navigate=useNavigate()
    return (
        <Div>
            <div>
                <button onClick={()=>setBarraSelecao(!barraSelecao)}><ion-icon name="menu-outline"></ion-icon></button>
                <button onClick={()=>navigate('/inserir')}><ion-icon name="construct-outline"></ion-icon></button>
                
                <button onClick={()=>navigate('/')}><ion-icon name="home-outline"></ion-icon></button>
                <button ><ion-icon name="cart-outline"></ion-icon></button>
                
            </div>
        </Div>
    )
}
const Div=styled.div`
background-color:#016b00;
display:flex;justify-content:center;align-items:center;
width:100%;height:10vh;
div{width:90%;display:flex;justify-content:space-between}
button{background-color:#016b00;border:0}
ion-icon{font-size:30px;color:white}
`