import React from 'react';

function Register() {
    return (

        <form>

            <label for='name'>Nombre</label>
            <input type='text' name='name' />

            <label for="lastName">Apellido</label>
            <input type="text" name="lastName" />

            <label for="dni">DNI</label>
            <input type="number" name="dni" />

            <label for="phone">Teléfono</label>
            <input type="number" name="phone" />

            <label for="email">E-mail</label>
            <input type="email" name="email" />

            <label for="address">Dirección</label>
            <input type="text" name="address" />

        </form>
    );
}




export default Register;