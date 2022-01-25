import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/transfer.scss";
import "../../../Scss/Layout/Modal.scss";
import { ModalSia } from "../../modal/ModalSia";
import SideBar from "../../SideBar";

const Transfers = ({
  recoverySelectValue,
  recoverySelectValueRet,
  getDataTransfer,
  result,
  resultRetirement,
  mapeoRetirement,
  mapeo,
  tooltipOn,
  isTooltipOn,
}) => {
  const navigate = useNavigate();

  const [errorRet, setErrorRet] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    const typeAccount = result.map((item) => item.typeAccount).toString();
    const typeAccountRet = resultRetirement
      .map((item) => item.typeAccount)
      .toString();

    if (!typeAccount) {
      setError("El campo de cuenta de depósito no puede quedar vacío");
      throw Error("El campo de cuenta de depósito no puede quedar vacío");
    }
    if (!typeAccountRet) {
      setErrorRet("El campo de cuenta de retiro no puede quedar vacío");
      throw Error("El campo de cuenta de retiro no puede quedar vacío");
    } else if (typeAccount === "false") {
      navigate("/services/third-account");
    } else if (typeAccount === "true") {
      navigate("/services/own-account");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <h1
        className="entry-question"
        id={tooltipOn ? "" : "tooltip"}
        data-info={tooltipOn ? "" : "¿Qué deseas hacer?"}
      >
        ¿Qué deseas hacer?
      </h1>
      <hr className="line" aria-hidden="true" />
      <section className="container-saider-form">
        <SideBar />
        <form
          className="all-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
            mapeoRetirement();
            mapeo();
          }}
        >
          <h1
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Ingresa los datos de la operación"}
          >
            Ingresa los datos de la operación
          </h1>
          <p
            className="transfer-p"
            id={tooltipOn ? "" : "tooltip"}
            data-info={
              tooltipOn
                ? ""
                : "Podrás transferir a cualquier banco, pagar tarjetas de crédito y servicios, y órdenes de pago."
            }
          >
            Podrás transferir a cualquier banco, pagar tarjetas de crédito y
            servicios, y órdenes de pago.
          </p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label
                htmlFor="seleccione una opción"
                className="form-label"
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Cuenta de retiro:"}
              >
                Cuenta de retiro:
              </label>
              <select
                name="seleccione una opción"
                className="form-select"
                id="seleccione una opción"
                placeholder="Seleccione una opción"
                onChange={(e) => {
                  recoverySelectValueRet(e);
                }}
              >
                <option defaultValue="">Seleccione una opción</option>
                {getDataTransfer.map(
                  (item) =>
                    item.typeAccount && (
                      <option key={item.id} value={item.id}>

                        {item.name} - {item.displayAccountNumber.slice(-3)}
                        Disponible: MXN{item.balance}
                      
                      </option>
                    )
                )}
              </select>
              <p
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : `${errorRet}`}
              >
                {errorRet}
              </p>
            </div>

            <div className="col-md-5">
              <label
                htmlFor="seleccione una cuenta"
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Cuenta de deposito:"}
              >
                Cuenta de deposito:
              </label>
              <select
                className="form-select"
                id="seleccione una cuenta"
                placeholder="Seleccione una opción"
                onChange={(e) => {
                  recoverySelectValue(e);
                }}
              >
                <option defaultValue="Seleccione una opción">
                  Seleccione una opción
                </option>
                {getDataTransfer.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.client} - {item.name} -{" "}
                    {item.displayAccountNumber.slice(-3)}
                  </option>
                ))}
              </select>
              <p id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : `${error}`}>{error}</p>
            </div>
          </div>
          <button className="update-account" id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Actualizar cuenta(s)"}>
            <i className="bi bi-caret-right-fill"></i> Actualizar cuenta(s)
          </button>

          <div className="transferButtons">
            <button type="submit" className="continue" id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Coninue"}>
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Cancelar"}
              onClick={() => {
                handleCancel();
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Cancelar
            </button>
          </div>
        </form>
        <ModalSia isTooltipOn={isTooltipOn} />
      </section>
    </>
  );
};

export default Transfers;
