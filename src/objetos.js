
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

export const App = () =>{
    const[nombre, setNombre] = useState("Felipe")
    
    const hacerclick = (e) =>{
        console.log(e.target)
        setNombre("Sebastian")
    }
        return <div className ="container">
            <h1>{nombre}</h1>
            <button className ="btn btn-primary" onClick = {(hacerclick)}>Cambiar Nombre </button>
        </div>
    }


    export const Appa = () => {
        const [password, setPassword]  = useState("")
        const [email, setEmail]  = useState("")
       
        const change  = (e) => {
            if(e.target.name === "email"){
                setEmail(e.target.value)
            } else if(e.target.name === "password"){
                setPassword(e.target.value)
            }
        }

        const onsubmit = (e) =>{
            e.preventDefault()
            console.log("Has hecho submit")
        }

        return (
            <div>
                <form className="row g-3" onSubmit ={onsubmit}>
                    <div className="col-auto">
                        <label for="staticEmail2" className="visually-hidden">Email</label>
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail2"  onChange ={change} value = {email} name ="email"/>
                    </div>
                    <div className="col-auto">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control" onChange ={change} value = {password} id="inputPassword2" placeholder="Password" name ="password"/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                    </div>
                </form>
            </div>
)

    }