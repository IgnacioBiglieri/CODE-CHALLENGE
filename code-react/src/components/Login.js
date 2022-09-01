import React from 'react';
import './Login.css';

function Login() {
    let loginButton = () => {
        console.log('Felicidades');}
    return (
        <div>
            <h1>Bienvenido!</h1>
            <p>Inicia sesión en su cuenta</p>
            <div>
                <input type="text" required="required" placeholder="E-mail" />
            </div>
            <div>
                <input type="number" required="required" placeholder="DNI" />
            </div>
            <div>
                <button
                    onClick={loginButton}>Ingresar</button>
            </div>
            <div>
                <input type="checkbox" id="remember" />
                <label for="remember">Recuerdame</label>
            </div>
        </div>
    )
}

export default Login