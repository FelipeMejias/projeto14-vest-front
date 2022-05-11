import styled from 'styled-components'

export default function  BarraSelecao({detalhes,setDetalhes,buscarItens}){
    const listaEsporte=['futebol','basquete','futebol-americano']
    const listaUtensilio=['bola','camisa','calcado']
    return (
        <Div>
            <div className='orgSelecao'>
                <ul>
                    {listaEsporte.map(str=>(
                        <Caixinha 
                            cor={detalhes.esporte==str?'white':'#013f00'}
                            corLetras={detalhes.esporte!=str?'white':'#013f00'}
                            onClick={()=>{
                                if(detalhes.esporte==str){
                                    setDetalhes({...detalhes,esporte:''})
                                    buscarItens({...detalhes,esporte:''})
                                }else{
                                    setDetalhes({...detalhes,esporte:str})
                                    buscarItens({...detalhes,esporte:str})
                                }
                                
                        }} className='caixinha'>
                            {str}</Caixinha>
                    ))}
                </ul>
                <ul>
                    {listaUtensilio.map(str=>(
                        <Caixinha 
                        cor={detalhes.utensilio==str?'white':'#013f00'}
                            corLetras={detalhes.utensilio!=str?'white':'#013f00'}
                        onClick={()=>{
                            if(detalhes.utensilio==str){
                                setDetalhes({...detalhes,utensilio:''})
                                buscarItens({...detalhes,utensilio:''})
                            }else{
                                setDetalhes({...detalhes,utensilio:str})
                                buscarItens({...detalhes,utensilio:str})
                            }
                            
                        }} className='caixinha'>
                            {str}</Caixinha>
                    ))}
                </ul>
            </div>
        </Div>
    )
}
const Div=styled.div`
background-color:#016b00;

display:flex;justify-content:center;align-items:center;
width:100%;
.orgSelecao{width:90%;display:flex;justify-content:space-evenly}

`
const Caixinha=styled.div`

    font-size:18px;color:${props=>props.corLetras};margin-bottom:5px;height:20px;
    padding:5px;background-color:${props=>props.cor};border-radius:5px

`