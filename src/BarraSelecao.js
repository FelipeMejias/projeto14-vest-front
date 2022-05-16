import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
export default function  BarraSelecao({setResposta,setInserir,inserir}){
    const listaEsporte=['futebol','basquete','futebol-americano']
    const listaUtensilio=['bola','camisa','calcado']
    const [detalhes,setDetalhes]=useState({})
    function buscarItens(selecoes){
    
        const promessa=axios.get(`http://localhost:5007/itens${construirQuery(selecoes)}`)
        promessa.then(res=>setResposta(res.data))
        promessa.catch(()=>console.log('erro no get'))
      }  
      function construirQuery(selecoes){
        let query='?'
        if(selecoes.esporte){query+=`esporte=${selecoes.esporte}`;
        if(selecoes.utensilio){query+=`&utensilio=${selecoes.utensilio}`}
      }else if(selecoes.utensilio){query+=`utensilio=${selecoes.utensilio}`
      }else{return ''}return query}
    
    return (

    <>
        
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
                                    setInserir({...inserir,esporte:''})
                                }else{
                                    setDetalhes({...detalhes,esporte:str})
                                    buscarItens({...detalhes,esporte:str})
                                    setInserir({...inserir,esporte:str})
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
                                setInserir({...inserir,utensilio:''})
                            }else{
                                setDetalhes({...detalhes,utensilio:str})
                                buscarItens({...detalhes,utensilio:str})
                                setInserir({...inserir,utensilio:str})
                            }
                            
                        }} className='caixinha'>
                            {str}</Caixinha>
                    ))}
                </ul>
            </div>
        </Div>
    </>
    )
}
const Div=styled.div`
background-color:#016b00;

display:flex;justify-content:center;align-items:center;
width:100%;height:16vh;
.orgSelecao{width:90%;display:flex;justify-content:space-between;margin-bottom:7px}
@media(min-width:614px){.orgSelecao{width:540px}}

`
const Caixinha=styled.div`

    cursor: pointer; 

    font-size:18px;color:${props=>props.corLetras};margin-bottom:5px;height:20px;
    padding:5px;background-color:${props=>props.cor};border-radius:5px

`
