import React from "react";
import Header from "./Header";
import Title from "./Title";
import FormContainer from "./FormContainer";

const Register = () => (
  <section className="container">
    <Header text="¿Ya tienes una cuenta? " href="/login" a="Ingresar"></Header>
    <Title
      title="Registrate gratis"
      body="Registrate gratis a Beeper y conoce todos nuestros beneficios"
    ></Title>
    <FormContainer type="register"></FormContainer>
  </section>
);

export default Register;
