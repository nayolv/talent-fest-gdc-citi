import React from "react";
import SideBar from "../../SideBar";
import { useNavigate } from "react-router-dom";
import { dataApi } from "../../../api/dataApi";
import { ModalTransf } from "../../modal/ModalTransf";

const DataVerification = ({ dataRegister, checked }) => {
  const navigate = useNavigate();

  const postDataAccount = async () => {
    await dataApi.post("https://api-talent-fest.herokuapp.com/clientData", {
      id: "",
      client: dataRegister.client,
      name: dataRegister.name,
      displayAccountNumber: dataRegister.displayAccountNumber,
      maximumAmount: dataRegister.maximumAmount,
      email: dataRegister.email,
      typeAccount: checked,
      balance: 10000
    });
  };

  return (
    <>
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <section className="container-data">
          <h2>Alta de cuenta Citibanamex</h2>
          <p>
            Confirma los datos que ingresaste y si son correctos, haz clic en
            "Aceptar" para enviar tu operación.
          </p>
          <table className="corfirm-data">
            <tbody>
              <tr>
                <td>Basado en:</td>
                <td>Tarjeta de credito o débito</td>
              </tr>
              <tr>
                <td>Plan bancario:</td>
                <td>{dataRegister.name}</td>
              </tr>
              <tr>
                <td>Número de tarjeta:</td>
                <td>{dataRegister.displayAccountNumber}</td>
              </tr>
              <tr>
                <td>Titular:</td>
                <td>{dataRegister.client}</td>
              </tr>
              <tr>
                <td>Monto máximo que autorizas pagar a este beneficiario:</td>
                <td>{dataRegister.maximumAmount}</td>
              </tr>
              <tr>
                <td>Correo electrónico del beneficiario:</td>
                <td>{dataRegister.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="transferButtons">
            <button type="button" className="accept" onClick={postDataAccount} data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              Aceptar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Cancelar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services/formRegister");
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Regresar
            </button>
          </div>
        </section>
      </section>
      <ModalTransf body={'Registro de cuenta exitoso'} />
    </>
  );
};

export default DataVerification;
