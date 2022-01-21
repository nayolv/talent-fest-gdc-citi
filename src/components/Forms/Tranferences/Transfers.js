import { useNavigate } from "react-router-dom";
import { useTransfers } from "../../../hooks/useTransfers";
import "../../../Scss/Layout/transfer.scss";
import SideBar from "../../SideBar";

const Transfers = () => {
  const navigate = useNavigate();
  const { selectValue, recoverySelectValue, getDataTransfer } = useTransfers();

  return (
    <>
      <SideBar />
      <form>
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
            <select
              name="seleccione una opción"
              className="form-control"
              placeholder="Seleccione una opción"
            >
              <option defaultValue="Seleccione una opción">
                Seleccione una opción
              </option>
              {getDataTransfer.map(
                (item) =>
                  item.typeAccount && (
                    <option key={item.id} value="cuenta-propia">
                      {item.name}
                    </option>
                  )
              )}
            </select>
          </div>

          <div className="col-md-5">
            <label>Cuenta de deposito:</label>
            <select
              name="seleccione una opción"
              className="form-control"
              placeholder="Seleccione una opción"
              onChange={(e) => {
                recoverySelectValue(e);
              }}
            >
              <option defaultValue="Seleccione una opción">
                Seleccione una opción
              </option>

              {getDataTransfer.map(
                (item) => 
                 <option key={item.id} value="cuenta-propia">{item.name}</option>
              )}
            </select>
          </div>
        </div>
        <hr />
        <div className="transferButtons">
          <button
            type="button"
            className="continue"
            onClick={() => {
              if (!selectValue) {
                alert("Debes llenar el formulario");
              } else if (selectValue === "cuenta-propia") {
                navigate("/services/own-account");
              } else if (selectValue === "cuenta-tercero") {
                navigate("/services/third-account");
              }
            }}
          >
            Continuar
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default Transfers;
