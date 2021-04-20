import React from "react";
//import GoogleBtn from "../../components/GoogleBtn";
import Input from "../../components/Input";
import SubmitBtn from "../../components/SubmitBtn";

const FormContainer = ({ type, setEmail, setPassword, email,password,handleSubmit,nombre,apellido,setNombre,setApellido}) => {
  
    if (type === "register") {
      return (
        <div className="row d-flex justify-content-center mb-5">

        <div className="col-12 register-container py-3">
          <form onSubmit={handleSubmit}>
            <Input type="text" name="name" value={nombre} placeholder="Nombre" setValue={setNombre}/>
            <Input type="text" name="lastname" placeholder="Apellido" value={apellido} setValue={setApellido}/>
            <Input type="email" name="email" value={email} placeholder="Correo electrónico"
            setValue={setEmail} />
            <Input type="password" name="password" value={password} placeholder="Contraseña" setValue={setPassword} />
            
            <div className="my-2 text-center">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
                Acepto la{" "}
                <a href="/register" className="text-decoration-underline">
                  política de privacidad
                </a>
              </label>
            </div>
            <div className="my-2 text-center fs-7">
              <div className="terms">
                Al crear tu cuenta en Beeper, esta aceptando los{" "}
                <a href="/register">Términos y Condiciones</a>
              </div>
            </div>
            <SubmitBtn text="Comenzar a usar Beeper" key="register" />
          </form>
          <hr className="mx-5" />
          
        </div>
        </div>
      );
    } else {
      return (
      <div className="row d-flex justify-content-center mb-5">

        <div className="col-12 login-container my-5 py-3">
          <form onSubmit={handleSubmit}>
            <Input type="email" name="email" value={email} placeholder="Correo electrónico"
            setValue={setEmail} />
            {console.log(email)}
            <Input type="password" name="password" value={password} placeholder="Contraseña" setValue={setPassword} />
            {console.log(password)}
            <div className="my-2 text-center fs-6">
              <div className="">
                <a href="/register">¿Olvidaste tu contraseña?</a>
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
         
          <div className="my-4 text-center">
            <button
              className="out-btn blue-text"
            >
              Registrarse gratis
            </button>
          </div>       
          <div className="my-4 text-center">
            <button
              className="out-btn blue-text"
            >
              Google Btn
            </button>
          </div>            
         
            
        </div>
        
      </div>
      );
    }
  };

export default FormContainer;