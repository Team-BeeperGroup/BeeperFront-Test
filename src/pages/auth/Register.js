import React, { useState } from "react";
import Title from "../../components/Login/Title";
import FormContainer from "../../components/Login/FormContainer";
import Header from "../../components/Login/Header";
// import { auth } from "../../firebase";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("EMAIL: ", email);
    console.log("pass: ", password);
    console.log("Nombre: ", nombre);
    console.log("apellido: ", apellido);

    try {
      await axios({
        method: "post",
        url: "https://beeper-webapp-2021.herokuapp.com/api/createUser",
        headers: {},
        data: {
          Nombre: nombre,
          Apellido: apellido,
          email,
          pwd: password,
        },
      }).then((e) => {
        alert(e.data.message);
        console.log(e);
      });
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <section className="container">
      <Header
        text="¿Ya tienes una cuenta? "
        href="/login"
        a="Ingresar"
      ></Header>
      <Title
        title="Registrate gratis"
        body="Registrate gratis a Beeper y conoce todos nuestros beneficios"
      ></Title>
      <FormContainer
        type="register"
        setEmail={setEmail}
        setPassword={setPassword}
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        nombre={nombre}
        setNombre={setNombre}
        apellido={apellido}
        setApellido={setApellido}
      ></FormContainer>
    </section>
  );
};

export default Register;
