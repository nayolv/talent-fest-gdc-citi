import React from "react";
import "../../../Scss/Layout/transfer.scss";
import SideBar from "../../SideBar";

const Transfers = () => {
  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr className="line"/>
      <section className="container-saider-form">
        <SideBar />
        <form className="all-form">
          <h1>Ingresa los datos de la operación</h1>
          <p>
            Podrás transferir a cualquier banco, pagar tarjetas de crédito y
            servicios, y órdenes de pago.
          </p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label>Cuenta de retiro:</label>
              <select className="form-select" id="inputGroupSelect01">
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
              </select>
            </div>
            <div className="col-md-5">
              <label>Cuenta de deposito:</label>
              <select className="form-select" id="inputGroupSelect01">
                <option defaultValue="Seleccione una opción">
                </option>
              </select>
            </div>
          </div>
          <button className="update-account"> <i className="bi bi-caret-right-fill"></i>  Actualizar cuenta(s)</button>
          <div className="transferButtons">
            <button type="button" className="continue">
              Continuar
            </button>
            <button type="button" className="cancel">
              <i class="bi bi-caret-right-fill"></i>Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Transfers;
