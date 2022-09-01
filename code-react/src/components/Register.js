import { func } from "prop-types";
import React, { useState } from "react";
import "./Register.css";



function Register() {
  function registerButton() {
    window.alert("Felicidades! Tus datos se registraron con éxito");
  }

  function handleForm(e) {
    e.preventDefault()
    console.log(e);
  }

  const [name, setName]  = useState(undefined)

  function handleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value)
  }

  const [lastName, setLastName] = useState(undefined)

  function handleLastNameChange(e) {
    console.log(e.target.value);
    setLastName(e.target.value)
  }

  const [dni, setDni] = useState(undefined)

  function handleDniChange(e) {
    console.log(e.target.value);
    setDni(e.target.value)
  }

  const [phone, setPhone] = useState(undefined)

  function handlePhoneChange(e) {
    console.log(e.target.value);
    setPhone(e.target.value)
  }

  const [email, setEmail] = useState(undefined)

  function handleEmailChange(e) {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  const [address, setAddress] = useState(undefined)

  function handleAddressChange(e) {
    console.log(e.target.value);
    setAddress(e.target.value)
  }

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
              onChange={handleNameChange}
            ></input>
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Apellido"
              required="required"
              onChange={handleLastNameChange}
            ></input>
          </div>

          <div>
            <input
              type="number"
              name="dni"
              id="dni"
              placeholder="DNI"
              required="required"
              onChange={handleDniChange}
            ></input>
          </div>

          <div>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              required="required"
              onChange={handlePhoneChange}
            ></input>
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required="required"
              onChange={handleEmailChange}
            ></input>
          </div>

          <div>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Dirección"
              required="required"
              onChange={handleAddressChange}
            ></input>
          </div>

          <div>
            <button onClick={registerButton}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
