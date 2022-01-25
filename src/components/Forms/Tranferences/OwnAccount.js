import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/Modal.scss";
import SideBar from "../../SideBar";
import { ModalSia } from "../../modal/ModalSia";

const OwnAccount = ({
  handleChange,
  importe,
  mapeoRet,
  mapeoDep,
}) => {
  const navigate = useNavigate();
  const [errorVacio, setErrorVacio] = useState("");
  const [errorMayorImporte, setErrorMayorImporte] = useState("");

  const handleClick = () => {
    if (importe === 0) {
      setErrorVacio("El campo no puede quedar vacío");
      throw Error("El campo no puede quedar vacío");
    }
    if (parseInt(importe) > mapeoDep.balance) {
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
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr aria-hidden="true"/>
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form">
          <h1>Pago a tarjetas Citibanamex</h1>
          <p>Indica los datos de la transferencia y da click en "Continuar</p>

          <div className="container">
            <div className="col-md-5">
              <label>Cuenta de retiro:</label>

              <select
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
              <label>Cuenta de deposito:</label>

              <select
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
              >
                <option>
                  {mapeoDep.name} - {mapeoDep.displayAccountNumber.slice(-3)}
                </option>
              </select>
            </div>
          </div>

          <label>Importe:</label>
          <label>Otra cantidad:</label>
          <div className="input-group mb-3 input-amount">
            <span className="input-group-text">MXN</span>
            <input
              type="number"
              aria-label="Amount (to the nearest dollar)"
              onChange={handleChange}
            />
            <p>{errorVacio}</p>
            <p>{errorMayorImporte}</p>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label">Programar a fecha futura</label>
          </div>

          <div className="transferButtons">
            <button
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
              <i className="bi bi-caret-right-fill"></i> Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default OwnAccount;
