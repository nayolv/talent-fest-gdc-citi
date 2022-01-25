import React from "react";
import SideBar from "../../SideBar";
import "../../../Scss/Layout/Confirmation.scss";
import "../../../Scss/Layout/Modal.scss";
import { useNavigate } from "react-router-dom";
import { ModalSia } from "../../modal/ModalSia";
import "../../../Scss/Layout/Modal.scss";

export const Confirmation = ({
  importe,
  mapeoRet,
  mapeoDep,
  balanceDep,
  balance,
  patchApiOwn,
  patchApiOwnDep,
  descriptionTransfer,
  hour,
  tooltipOn,
  isTooltipOn
}) => {
  const navigate = useNavigate();
  patchApiOwn(mapeoRet.id);
  patchApiOwnDep(mapeoDep.id);

  return (
    <>
      <h1
        className="entry-question"
        id={tooltipOn ? "" : "tooltip"}
        data-info={tooltipOn ? "" : "¿Qué deseas hacer?"}
      >
        ¿Qué deseas hacer?
      </h1>
      <hr aria-hidden="true" />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h2
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Pago a tarjetas Citibanamex"}
          >
            Pago a tarjetas Citibanamex
          </h2>

          <section className="table-container">
            <p
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "Tu pago ha sido aplicado"}
            >
              <i id="check" className="bi bi-check-lg" />Tu pago ha sido aplicado
            </p>
            <p
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "Número de autorización 112545"}
            >
              Número de autorización 112545
            </p>

            <table className="table">
              <tbody>
                <tr>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "Cuenta de retiro:"}
                  >
                    Cuenta de retiro:
                  </td>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={
                      tooltipOn
                        ? ""
                        : `${
                            mapeoRet.name
                          } - ${mapeoRet.displayAccountNumber.slice(-3)}`
                    }
                  >
                    {mapeoRet.name} - {mapeoRet.displayAccountNumber.slice(-3)}
                    <br />
                    <span
                      id={tooltipOn ? "" : "tooltip"}
                      data-info={
                        tooltipOn ? "" : `Disponible: MXN${balanceDep}`
                      }
                    >
                      {" "}
                      Disponible: MXN{balanceDep}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "Cuenta de despósito:"}
                  >
                    Cuenta de despósito:
                  </td>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={
                      tooltipOn
                        ? ""
                        : `${mapeoDep.client} - ${mapeoDep.name} -
                    ${mapeoDep.displayAccountNumber.slice(-3)}`
                    }
                  >
                    {mapeoDep.client} - {mapeoDep.name} -
                    {mapeoDep.displayAccountNumber.slice(-3)}
                    <br />
                    {mapeoDep.typeAccount ? (
                      <span
                        id={tooltipOn ? "" : "tooltip"}
                        data-info={tooltipOn ? "" : `Saldo: MXN${balance}`}
                      >
                        Saldo: MXN{balance}
                      </span>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="table-container">
            <h3
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "Detalle de la transferencia"}
            >
              Detalle de la transferencia
            </h3>
            <table className="table">
              <tbody>
                <tr>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "Importe:"}
                  >
                    Importe:
                  </td>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : `MXN${importe}`}
                  >
                    MXN{importe}
                  </td>
                </tr>
                <tr>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "Fecha de aplicación:"}
                  >
                    Fecha de aplicación:
                  </td>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "25 Ene 2022"}
                  >
                    25 Ene 2022
                  </td>
                </tr>
                <tr>
                  <td
                    id={tooltipOn ? "" : "tooltip"}
                    data-info={tooltipOn ? "" : "Hora de aplicación:"}
                  >
                    Hora de aplicación:
                  </td>
                  <td>{hour}</td>
                </tr>
                {mapeoDep.typeAccount === false ? (
                  <tr>
                    <td
                      id={tooltipOn ? "" : "tooltip"}
                      data-info={tooltipOn ? "" : "Descripción:"}
                    >
                      Descripción:
                    </td>
                    <td
                      id={tooltipOn ? "" : "tooltip"}
                      data-info={tooltipOn ? "" : `${descriptionTransfer}`}
                    >
                      {descriptionTransfer}
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </section>
          <section className="btns-confirmation-own">
            <button
              className="continue"
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "Hacer otra transferencia"}
              onClick={() => {
                navigate("/services");
              }}
            >
              Hacer otra transferencia
            </button>
            <button id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "Imprimir"}>
              <i className="bi bi-caret-right-fill" />
              Imprimir
            </button>
          </section>
        </section>
        <ModalSia isTooltipOn={isTooltipOn} />
      </section>
    </>
  );
};
