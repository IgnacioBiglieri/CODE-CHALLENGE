import React from 'react';
import './Register.css';

function Register() {

    function registerButton() {
        window.alert('Felicidades! Tus datos se registraron con éxito');
    }

    return (

        <div className='registerForm'>
            <div className='register'>
                <h1>Registrate!</h1>
                <p>Complete los siguientes datos para su registro</p>

                <div>
                    <input type="text" name="name" id="name" placeholder='Nombre' required="required"></input>
                </div>

                <div>
                    <input type="text" name="lastName" id="lastName" placeholder='Apellido' required="required"></input>
                </div>

                <div>
                    <input type="number" name="dni" id="dni" placeholder='DNI' required="required"></input>
                </div>

                <div>
                    <input type="number" name="phone" id="phone" placeholder='Teléfono' required="required"></input>
                </div>

                <div>
                    <input type="email" name="email" id="email" placeholder='E-mail' required="required"></input>
                </div>

                <div>
                    <input type="text" name="address" id="address" placeholder='Dirección' required="required"></input>
                </div>

                <div>
                    <button
                        onClick={registerButton}>Registrarse
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register