import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginProcess } from "../services/auth";
import './Login.css';




function Login() {

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await loginProcess({email, dni})
          .then((respuesta) => {
                if(respuesta.data.status == 200){
                    window.sessionStorage.setItem("token", respuesta.data.token);
                    window.sessionStorage.setItem("name", respuesta.data.name);
                    navigate("/list");
                } else {
                    console.log(respuesta.data.error);
                }
            },
            (error) => {
                console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      };


    const navigate = useNavigate()

    const [email, setEmail] = useState(undefined)

    const [dni, setDni] = useState(undefined)


    return (
        <div className='loginForm'>
            <div className='login'>
                <h1>Bienvenido!</h1>
                <p>Inicia sesión en su cuenta</p>
                <form method="GET" onSubmit={handleLogin}>
                    <div>
                        <input
                            type="text"
                            required="required"
                            placeholder="E-mail"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            required="required"
                            placeholder="DNI"
                            id="dni"
                            onChange={(e) => setDni(e.target.value)}

                        />
                    </div>
                    <div>
                        <button type="submit" onSubmit={handleLogin}
                            >Ingresar</button>
                    </div>
                </form>
                <div>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuerdame</label>
                </div>
            </div>
        </div>
    )
}

export default Login