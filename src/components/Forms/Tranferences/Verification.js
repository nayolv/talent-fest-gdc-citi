import React from "react";
import SideBar from "../../SideBar";
import { useNavigate } from "react-router-dom";
import { ModalAlert } from "../../modal/ModalAlert";
import "../../../Scss/Layout/Verification.scss";
import "../../../Scss/Layout/Modal.scss";
import { ModalSia } from "../../modal/ModalSia";

export const Verification = ({
  importe,
  mapeoRet,
  mapeoDep,
  balanceDeposito,
  newBalance,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h2>Pago a tarjetas Citibanamex</h2>

          <section className="table-container">
            <p>
              Confirma los datos que ingresaste y si son correctos, haz clic en
              "Aceptar para enviar tu operación.
            </p>
            <table className="table">
              <tbody>
                <tr>
                  <td>Cuenta de retiro:</td>
                  <td>
                    {mapeoRet.name} - {mapeoRet.displayAccountNumber.slice(-3)}{" "}
                    <span>MXN{mapeoRet.balance}</span>
                  </td>
                </tr>
                <tr>
                  <td>Cuenta de despósito:</td>
                  <td>
                    {mapeoDep.client} - {mapeoDep.name} -{" "}
                    {mapeoDep.displayAccountNumber.slice(-3)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="table-container">
            <h3>Detalle de la transferencia</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Importe:</td>
                  <td>MXN{importe}</td>
                </tr>
                <tr>
                  <td>Fecha de aplicación:</td>
                  <td>25 Ene 2022</td>
                </tr>
                <tr>
                  <td>Hora de aplicación:</td>
                  <td>18:16:25</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="btns-ver-own">
            <button
              className="continue"
              id="aceptar"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                navigate("/services/confirmation");
                balanceDeposito(mapeoRet.balance, importe);
                newBalance(mapeoDep.balance, importe);
              }}
            >
              Aceptar
            </button>
            <button className="cancel" onClick={() => navigate(-1)}>
              <i className="bi bi-caret-right-fill" />
              Regresar
            </button>
            <button
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              <i className="bi bi-caret-right-fill" />
              Cancelar
            </button>
          </section>
        </section>
      <ModalSia />
      </section>
      <ModalAlert body={"Transferencia exitosa"} />
    </>
  );
};
