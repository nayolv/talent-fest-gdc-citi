import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import SideBar from "../../SideBar";

const AccountRegister = () => {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState({
    client:"",
    name: "",
    displayAccountNumber: "",
    cardType: "",
    typeAccount: false,
    MaximumAmount: "",
    displayAccountNumbe: "",
    email: "",
    // alias:''
  });

  
  return (
    <div>
      <SideBar />
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <>
        <form>
          <h1>Alta de cuenta Citibanamex</h1>
          <p>Indica los datos del alta y da click en "Continuar</p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label>¿Qué dato tienes de la cuenta para darla de alta?</label>
              <select
                name="seleccione una opción"
                className="form-control"
                placeholder="Tarjeta de debito o crédito"
              >
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
                <option>Mi Cuenta CitiBanamex</option>
                <option>Cuenta Priority CitiBanamex</option>
              </select>
            </div>
            <br />
            <p className="pLabels">Numero de tarjeta:</p>
            <input className="form-control-sm" type="text"></input>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" >
                Cuenta propia
                </label>
            </div>
            <p className="pLabels">
              Titular de la cuenta
            </p>
            <input className="form-control-sm" type="text"></input>
            <br />
            <p className="pLabels">Monto máximo que autorizas pagar a este beneficiario:</p>
            <div className="input-group mb-3">
              <span className="input-group-text">MXN</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <br />
            <p className="pLabels">Correo electrónico (opcional):</p>
            <input className="form-control-sm" type="email"></input>
            <p className="pLabels">Confirmar correo electrónico:</p>
            <input className="form-control-sm" type="email"></input>
          </div>
          <hr />
          <div className="transferButtons">
            <button type="submit" className="continue">
              Continuar
            </button>
            <button type="button" className="cancel" onClick={()=>{navigate ("/services")}}>
              Cancelar
            </button>
          </div>
        </form>
      </>
      {/* <SideBar1/> */}
    </div>
  );
};

export default AccountRegister;
