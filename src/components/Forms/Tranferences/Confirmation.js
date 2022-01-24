import React from "react";
import SideBar from "../../SideBar";
import "../../../Scss/Layout/Confirmation.scss";
import "../../../Scss/Layout/Modal.scss";
import { useNavigate } from "react-router-dom";
import { ModalSia } from "../../modal/ModalSia";
import "../../../Scss/Layout/Modal.scss"


export const Confirmation = ({ importe, mapeoRet, mapeoDep, balanceDep, balance, patchApiOwn, patchApiOwnDep }) => {
  const navigate = useNavigate();
  patchApiOwn(mapeoRet.id);
  patchApiOwnDep(mapeoDep.id)

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h2>Pago a tarjetas Citibanamex</h2>

          <section className="table-container">
            <p className="sm">
              <i id="check" className="bi bi-check-lg" /> Tu pago ha sido
              aplicado
            </p>
            <p className="sm">Número de autorización 112545</p>

            <table className="table">
              <tbody>
                <tr>
                  <td>Cuenta de retiro:</td>
                  <td>
                    {mapeoRet.name} - {mapeoRet.displayAccountNumber.slice(-3)}
                    <br />
                    <span>
                      {" "}
                      Disponible: MXN{balanceDep}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Cuenta de despósito:</td>
                  <td>
                    {mapeoDep.client} - {mapeoDep.name} -
                    {mapeoDep.displayAccountNumber.slice(-3)}
                    <br />
                   {mapeoDep.typeAccount?(<span>Saldo: MXN{balance}</span>):(null)}
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
          <section className="btns-confirmation-own">
            <button
            className="continue"
              onClick={() => {
                navigate("/services");
              }}
            >
              Hacer otra transferencia
            </button>
            <button id="print">
              <i className="bi bi-caret-right-fill" />
              Imprimir
            </button>
          </section>
        </section>
        <ModalSia />
      </section>
    </>
  );
};
