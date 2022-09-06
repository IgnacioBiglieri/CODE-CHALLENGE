import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginProcess } from "../services/auth";
import './Login.css';




function Login() {

    const handleLogin = async (e) => {
        console.log(email);
        console.log(dni);
        e.preventDefault();
        try {
          await loginProcess({email, dni})
          .then(() => {
              navigate("/list");
              window.location.reload();
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
        /* fetch("http://localhost:8000/admins/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }) */
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
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            required="required"
                            placeholder="DNI"
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