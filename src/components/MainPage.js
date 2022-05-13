import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import logo from "../assepts/logo.svg"

import "../css/MainPage.css"

export default function MainPage ({setRespostaLogin}) {
    return (
        <div className="login">
            <Logo />
            <Formulario setRespostaLogin={setRespostaLogin}/>
            <CadastreSe />
        </div>
    )
}

function Logo () {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    )
}

function Formulario ({setToken, setPerfil,setRespostaLogin}) {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate()

    async function Logar(e) {
        e.preventDefault()

        try {
            const promessa=  axios.post("http://localhost:5007/sign-in", {
                email, password
            })
            promessa.then(res=>{setRespostaLogin(res.data)})
            navigate("/itens")
        } catch (error) {
            alert("Ops! Infelizmente ocorreu um erro! Tente novamente!")
            console.log(error)
        }
    }

    return (
        <form onSubmit={Logar} >
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="senha" value={password} onChange={(e) => setpassword(e.target.value)}/>
            <button type="submit">Entrar</button>
        </form>
    )
}

function CadastreSe () {
    return (
        <div className="link">
            <Link to="/sign-up">Não tem um cadastro? Caastre-se</Link>
        </div>
    )
}