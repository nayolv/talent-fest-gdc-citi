import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/transfer.scss";
import SideBar from "../../SideBar";
import { useTransfers } from "../../../hooks/useTransfers";


const OwnAccount = ({ selectValue, selectValueRetirement }) => {
  const navigate = useNavigate();
  const { getDataTransfer } = useTransfers();
  
  const resultRetirement = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValueRetirement)
  );
  const result = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValue)
  );

  return (
      <>
       <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
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
                {resultRetirement.map((item) => (
                  <option key={item.id} defaultValue={item.name}>
                    {item.name}
                  </option>
                ))}
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
                {result.map((item) => (
                  <option key={item.id} defaultValue={item.name}>{item.name} </option>
                ))}
              </select>
            </div>
          </div>
          <label>Importe:</label>
          <label>Otra cantidad:</label>
          <div className="input-group mb-3 input-amount">
            <span className="input-group-text">MXN</span>
            <input
              type="text"
              aria-label="Amount (to the nearest dollar)"
            />
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
            <button className="continue">Continuar</button>
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
      </section>
    </>
  );
};

export default OwnAccount;
