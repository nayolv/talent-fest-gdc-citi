import React from "react";
import { useNavigate } from "react-router-dom";
import UseRegister from "../../../hooks/Register/UseRegister";
// import SideBar5 from '../../Sidebar5'
import "../../../Scss/Layout/DataTranfer.scss";
import SideBar from "../../SideBar";

const DataRegister = () => {
  const { typeRegister, newRegister } = UseRegister();
  const navigate = useNavigate();

  return (
    <div>
      <SideBar />
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr />
      <>
        <form>
          <h1>Ingresa los datos de la operación</h1>
          <p>
            Podrás dar de alta cuentas, tarjetas, celulares, créditos, servicios
            y ordenes de pago.
          </p>
          <br />
          <br />
          <p>¿Qué deseas dar de alta?</p>
          <div className="container">
            <div className="col-md-5">
              <select
                name="seleccione una opción"
                className="form-control"
                placeholder="Seleccione una opción"
                onChange={(e) => {
                  newRegister(e);
                }}
              >
                <option>Seleccione una opción</option>
                {/* <option >Cuenta Citibanamex</option> */}
                <option value="Registro de cuenta">
                  Cuenta Bancaria CitiBanamex
                </option>
              </select>
            </div>
          </div>
          <hr />
          <div className="transferButtons">
            <button
              type="button"
              className="continue"
              onClick={() => {
                if (typeRegister === "") {
                  alert("selecciona uan opción");
                } else if (typeRegister === "Registro de cuenta") {
                  navigate("/services/formRegister");
                }
              }}
            >
              Continuar
            </button>
            <button type="button" className="cancel" onClick={() => {navigate("/services")}}>
              Cancelar
            </button>
          </div>
          <p className="reminder">
            Recuerda que ningún ejecutivo de Citibanamex nunca te llamará para
            dar de alta una cuenta, ya sea como prueba, asesoría o
          </p>
          <p className="reminder">
            para proteger tu dinero. Si recibes llamadas de este tipo cuelga, ya
            que es un fraude
          </p>
        </form>
      </>
    </div>
  );
};

export default DataRegister;
