import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/Modal.scss";
import { ModalSia } from "../../modal/ModalSia";
import SideBar from "../../SideBar";

const ThirdAccount = ({ handleChange, importe, mapeoRet, mapeoDep }) => {
  const navigate = useNavigate();
  const [errorVacio, setErrorVacio] = useState("");
  const [errorMayorImporte, setErrorMayorImporte] = useState("");

  const handleClick = () => {

    if (importe === 0) {
      setErrorVacio("El campo no puede quedar vacío");
      throw Error("El campo no puede quedar vacío");
    }
    if (parseInt(importe) > mapeoRet.balance) {
        setErrorMayorImporte(
        "El importe no puede ser mayor al total de la cuenta"
      );
      throw Error("El importe no puede ser mayor al total de la cuenta");
    } else {
      navigate("/services/verification-transfer");
    }
  };

  return (
    <>
      <h1 className="entry-question">¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form">
          <h2>Cuentas Citibanamex(Terceros)</h2>
          <p>Indica los datos de la transferencia y da click en continuar</p>
          <div className="container">
            <div className="col-md-5">
              <label aria-label="cuenta de retiro">Cuenta de retiro:</label>

              <select
                aria-label="seleccione una opcion"
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
              >
                <option>
                  {mapeoRet.name} - {mapeoRet.displayAccountNumber.slice(-3)}
                  Disponible: MXN{mapeoRet.balance}
                </option>
              </select>
            </div>

            <div className="col-md-5">
              <label aria-label="cuenta de deposito">Cuenta de déposito:</label>

              <select
                aria-label="seleccione una opcion"
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
              >
                <option>
                  {mapeoDep.client}-{mapeoDep.name} -{" "}
                  {mapeoDep.displayAccountNumber.slice(-3)}
                </option>
              </select>
            </div>

            <div className="input-group mb-3 input-amount">
              <span className="input-group-text">$</span>
              <input
                type="text"
                aria-label="cantidad"
                onChange={handleChange}
              />
              <p>{errorVacio}</p>
              <p>{errorMayorImporte}</p>
            </div>
            <div className="form-check">
              <input
                aria-label="check"
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label aria-label="futura fecha" className="form-check-label">
                Programar a fecha futura:
              </label>
            </div>
            <div className="form-check">
              <input
                aria-label="check"
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
              />
              <label
                aria-label=" check Cuenta consentradora"
                className="form-check-label"
              >
                Cuenta concentradora
              </label>
            </div>
            <div className="form-check">
              <input
                aria-label="check"
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
              />
              <label aria-label="check referencia" className="form-check-label">
                Referencias
              </label>
            </div>
            <p>Descripción para identificar la transferencia</p>
            <span className="opcion">(opcional)</span>
            <input
              aria-label="Escribe descripcion"
              className="form-control"
            ></input>
            <div className="form-check">
              <input
                aria-label="check"
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
              />
              <label aria-label="check notificar" className="form-check-label">
                Notificar al beneficiario(opcional):
              </label>
            </div>
          </div>
          <div className="transferButtons">
            <button
              type="button"
              className="continue"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default ThirdAccount;
