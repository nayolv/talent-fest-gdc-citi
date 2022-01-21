import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransfers } from "../../../hooks/useTransfers";
import "../../../Scss/Layout/DataTranfer.scss";
import SideBar from "../../SideBar";
//import Sidebar4 from '../../Sidebar4'

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
    <div>
      <SideBar />
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <>
        <form>
          <h1>Pago a tarjetas Citibanamex</h1>
          <p>Indica los datos de la transferencia y da click en "Continuar</p>
          <br />
          <br />

          <div className="container">
            <div className="col-md-5">
              <label>Cuenta de retiro:</label>
              <select
                name="seleccione una opción"
                className="form-control"
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
                className="form-control"
                placeholder="Seleccione una opción"
              >
                {result.map((item) => (
                  <option key={item.id} defaultValue={item.name}>{item.name} </option>
                ))}
              </select>
            </div>
          </div>
          <label>Importe:</label>
          <br />
          <label>Otra cantidad:</label>

          <div className="input-group mb-3">
            <span className="input-group-text">MXN</span>
            <input
              type="text"
              className="form-control"
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

          <hr />
          <div className="transferButtons">
            <button className="continue">Continuar</button>
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
      </>
    </div>
  );
};

export default OwnAccount;
