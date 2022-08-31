import React from 'react';

function Login() {
    return (
        <form>

            <label for="email">E-mail</label>
            <input type="email" name="email" />

            <label for="dni">DNI</label>
            <input type="number" name="dni" />

        </form>
    );
}




export default Login;