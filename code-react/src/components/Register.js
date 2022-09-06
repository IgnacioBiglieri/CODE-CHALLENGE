import { func } from "prop-types";
import React, { useState } from "react";
import "./Register.css";



function Register() {
  function registerButton() {
    window.alert("Felicidades! Tus datos se registraron con éxito");
  }

  function handleForm(e) {
    e.preventDefault()
    console.log(name);
    console.log(lastName);
    console.log(dni);
    console.log(phone);
    console.log(email);
    console.log(address);

    
    fetch("http://localhost:8000/users/register",{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre: name, apellido: lastName, dni, telefono: phone, email, domicilio: address, categoria: 'User'}),
        })

      }

  const [name, setName]  = useState(undefined)

  const [lastName, setLastName] = useState(undefined)

  const [dni, setDni] = useState(undefined)

  const [phone, setPhone] = useState(undefined)

  const [email, setEmail] = useState(undefined)

  const [address, setAddress] = useState(undefined)

  return (

    <div className="registerForm">
      <div className="register">
        <h1>Registrate!</h1>
        <p>Complete los siguientes datos para su registro</p>
        <form method="POST" onSubmit={handleForm}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              required="required"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellido"
              required="required"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              name="dni"
              id="dni"
              placeholder="DNI"
              required="required"
              onChange={(e) => setDni(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              required="required"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Dirección"
              required="required"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <button onClick={registerButton}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register
