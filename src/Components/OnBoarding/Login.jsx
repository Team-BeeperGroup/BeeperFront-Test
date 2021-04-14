import React from "react";
import Header from "./Header";
import Title from "./Title";
import FormContainer from "./FormContainer";

const Login = () => (
  <section className="container">
    <Header text="¿Aún no tienes una cuenta? " href="/register" a="Registrate"></Header>
    <Title
      title="Ingresa con tu cuenta"
      body=""
    ></Title>
    <FormContainer type="login"></FormContainer>
  </section>
);

export default Login;
