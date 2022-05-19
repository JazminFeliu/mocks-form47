import React from "react";
import { FormRegister } from "./components/Forms/FormRegister";
import { FormLogin } from "./components/Forms/FormLogin";
import { FormInicialChat } from "./components/Forms/FormInicialChat";
import { FormRegStartUp } from "./components/Forms/FormRegStartUp";
import { FormRegIndustry } from "./components/Forms/FormRegIndustry";
import { FormApplication } from "./components/Forms/FormApplication";
import { FormBAndRMethod} from "./components/Forms/FormBAndRMethod";
import { FormRegCompany } from "./components/Forms/FormRegCompany";


function App() {
  return (
    <div className="App">
      <h2>Caso 1: usuario no registrado, emprendedor, quiere hacer la Valuacion Free (Berkus and Risk)</h2>
       <h3>User Register</h3>
      <FormRegister /> 
      <p>POST Object JSON persiste en Collection: Users. 
        Usuario recibe "Gracias por registrarte" y pasa a seccion loginUser </p>

      <h3>User Login</h3>   
      <FormLogin /> 
      <p>GET Object JSON verifica datos en Collection Users, si esta todo ok da acceso. 
        Usuario recibe "Gracias por ingresar" y pasa a seccion donde debe cargar los datos Iniciales. 
        El ApplicationForm tiene los bancos de datos StartUp, Application, BAndRMethod, 
        que persistiran en diferentes collections, a fin de reutilizar los datos mas adelante. </p>


      <h3>Liven carga previamente los datos de Industry:</h3>
      <FormRegIndustry /> 
      <p>POST Object JSON persiste en Collection: Industries. 
        La carga de datos la automatiza Liven, previo a su uso </p>

        <h3>Usuario Carga Segmento Queremos Conocerte:</h3>
      <FormInicialChat /> 
      <p>POST Object JSON persiste en Collection: StartUps. 
        Usuario recibe "Gracias por ingresar los datos de su startUp" y continua carga de datos de la compania</p>

      <h3>Usuario Carga Segmento StartUp de su ApplicationForm:</h3>
      <FormRegStartUp /> 
      <p>POST Object JSON persiste en Collection: StartUps. 
        Usuario recibe "Gracias por ingresar los datos de su startUp" y continua carga de datos de la compania</p>

        <h3>Usuario Carga Segmento Company de su ApplicationForm:</h3>
      <FormRegCompany /> 
      <p>POST Object JSON persiste en Collection: Companies. 
        Usuario recibe "Gracias por ingresar los datos de su startUp" y pasa a cargar datos para Calcular Berkus y Risk</p>

        <h3>Usuario Carga Segmento Berkus y Risk Method:</h3>
        <FormBAndRMethod />
        <p>POST Object JSON persiste en Collection: BAndRMethod. 
        Usuario recibe "Gracias por ingresar todos los datos" y recibe su Informe Application Free</p>
      <FormApplication/> 
      <br />

    </div>
  );
}

export default App;
