import React, { useState } from "react";
import Title from "../../components/Login/Title";
import FormContainer from "../../components/Login/FormContainer";
import Header from "../../components/Login/Header";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      
      const idTokenResult = await user.getIdTokenResult();
      console.log(idTokenResult.token);
      alert("Logged In");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <section className="container">
        <Header
          text="¿Aún no tienes una cuenta? "
          href="/register"
          a="Registrate"
        ></Header>
        <Title title="Ingresa con tu cuenta" body=""></Title>
        <FormContainer
          type="login"
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        ></FormContainer>
      </section>
    </>
  );
};

export default Login;
