import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginProcess } from "../services/auth";
import './Login.css';




function Login() {

    const navigate = useNavigate()

    const [error, setError] = useState(undefined);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await loginProcess({email, dni})

          
                if(respuesta.status === 200){
                    localStorage.setItem("token", respuesta.token);
                    localStorage.setItem("name", respuesta.name);
                    console.log(navigate);
                    navigate("/list");
                } else {
                        setError(respuesta.data.error);
                    } 
            }

        catch (err) {
          console.log(err);
        }
      };


   

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
                    {error && (
                        <p>{error}</p>
                    )}
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