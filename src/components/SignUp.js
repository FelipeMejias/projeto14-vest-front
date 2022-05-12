import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import logo from "../assepts/logo.svg"

import "../css/SignUp.css"

export default function SignUp () {
    return (
        <div className="tela-cadastro">
            <Logo />
            <Formulario />
            <Login />
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

function Formulario () {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const navigate = useNavigate()

    async function cadastrar(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5007/sign-up", {
                name, email, password, confirmPassword
            })
            alert("Cadastro feito com sucesso!")
            navigate("/itens")
        } catch (error) {
            alert("Ops! Infelizmente ocorreu um erro! Tente novamente!")
            console.log(error)
        }



    }

    return (
        <form onSubmit={cadastrar}>
            <input type="text" placeholder="nome" value={name} onChange={e => setname(e.target.value)}  />
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}  />
            <input type="password" placeholder="senha" value={password} onChange={e => setpassword(e.target.value)}  />
            <input type="password" placeholder="confirmar senha" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}  />

            <button type="submit">CADASTRAR</button>
        </form>
    )
}

function Login () {
    return (
        <div className="link">
            <Link to="/">Já possuí uma conta? Entre</Link>
        </div>
    )
}