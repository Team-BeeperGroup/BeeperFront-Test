import React from "react";
import GoogleBtn from "./GoogleBtn";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";

const redirectBtn = (url) => {
  window.location.replace(url);
};

const renderForm = (type) => {
  if (type === "register") {
    return (
      <div className="col-12 register-container py-3">
        <form>
          <Input type="text" name="name" placeholder="Nombre" />
          <Input type="text" name="lastname" placeholder="Apellido" />
          <Input type="email" name="email" placeholder="Correo electrónico" />
          <Input type="password" name="password" placeholder="Contraseña" />
          <div className="my-2 text-center">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
              Acepto la{" "}
              <a href="#" className="text-decoration-underline">
                política de privacidad
              </a>
            </label>
          </div>
          <div className="my-2 text-center fs-7">
            <div className="terms">
              Al crear tu cuenta en Beeper, esta aceptando los{" "}
              <a href="#">Términos y Condiciones</a>
            </div>
          </div>
          <SubmitBtn text="Comenzar a usar Beeper" key="register" />
        </form>
        <hr className="mx-5" />
        <GoogleBtn />
      </div>
    );
  } else {
    return (
      <div className="col-12 login-container my-5 py-3">
        <form>
          <Input type="email" name="email" placeholder="Correo electrónico" />
          <Input type="password" name="password" placeholder="Contraseña" />
          <div className="my-2 text-center fs-6">
            <div className="">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div className="my-2 text-center">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
              Guardar datos
            </label>
          </div>
          <SubmitBtn text="Iniciar" key="login" />
        </form>
        <hr className="mx-5" />
        <div className="">
          <GoogleBtn />
        </div>
        <div className="py-5 text-center">
          <button
            className="out-btn blue-text"
            onClick={() => {
              redirectBtn("/register");
            }}
          >
            Registrarse gratis
          </button>
        </div>
      </div>
    );
  }
};

const FormContainer = ({ type }) => (
  <div className="row d-flex justify-content-center mb-5">
    {renderForm(type)}
  </div>
);

export default FormContainer;
