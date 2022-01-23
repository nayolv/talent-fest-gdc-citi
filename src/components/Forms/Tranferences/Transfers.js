import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransfers } from "../../../hooks/useTransfers";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/Modal.scss";
import { ModalSia } from "../../modal/ModalSia";
import SideBar from "../../SideBar";

const Transfers = ({ recoverySelectValue, selectValue, recoverySelectValueRet }) => {
  const navigate = useNavigate();
  const { getDataTransfer } = useTransfers();

  const result = getDataTransfer.filter(
    (item) => item.id === parseInt(selectValue)
  );

  const handleClick = () => {
    const typeAccount = result.map((item) => item.typeAccount).toString();
    
    if (typeAccount === "") {
      alert("Debes llenar el formulario");
    } else if (typeAccount === "false") {
      navigate("/services/third-account");
    } else if (typeAccount === "true") {
      navigate("/services/own-account");
    }
  };

  return (
    <>
     <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr className="line"/>
      <section className="container-saider-form">
      <SideBar />
        <form className="all-form">
        <h1>Ingresa los datos de la operación</h1>
          <p className="transfer-p">
            Podrás transferir a cualquier banco, pagar tarjetas de crédito y
            servicios, y órdenes de pago.
          </p>
          <br />
          <br />
        <div className="container">
          <div className="col-md-5">
            <label>Cuenta de retiro:</label>
            <select
              name="seleccione una opción"
              className="form-select" 
              id="inputGroupSelect01"
              placeholder="Seleccione una opción"
              onChange={(e) => {
                recoverySelectValueRet(e);
              }}
            >
              <option defaultValue="Seleccione una opción">
                Seleccione una opción
              </option>
              {getDataTransfer.map(
                (item) =>
                  item.typeAccount && (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  )
              )}
              </select>
            </div>
            <div className="col-md-5">
              <label>Cuenta de deposito:</label>
              <select className="form-select" id="inputGroupSelect01"  placeholder="Seleccione una opción"
              onChange={(e) => {
                recoverySelectValue(e);
              }}
            >
              <option defaultValue="Seleccione una opción">
                Seleccione una opción
              </option>
              {getDataTransfer.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
          <button className="update-account"> <i className="bi bi-caret-right-fill"></i>  Actualizar cuenta(s)</button>
       
            <div className="transferButtons">
          <button
            type="button"
            className="continue"
            onClick={() => {
              handleClick();
            }}
          >
            Continuar
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => {
              navigate("/");
            }}>
              <i className="bi bi-caret-right-fill"></i>Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default Transfers;
