import React from "react";
import SideBar from "../../SideBar";
import "../../../Scss/Layout/VerificationOwnTransference.scss";

export const VerificationOwnTransference = () => {
  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="all-form">
          <h1>Pago a tarjetas Citibanamex</h1>
          <p>
            Confirma los datos que ingresaste y si son correctos, haz clic en
            "Aceptar para enviar tu operación.
          </p>
          <section>
            <table className="table-verification-own">
              <tbody>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};
