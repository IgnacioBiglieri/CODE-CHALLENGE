import React from 'react';
import './Login.css';

function Login() {
    let loginButton = () => {
        window.alert('Felicidades');
    }
    return (
        <div className='loginForm'>
            <div className='login'>
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
        </div>
    )
}

export default Login