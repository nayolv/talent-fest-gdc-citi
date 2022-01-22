import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/transfer.scss";
import SideBar from "../../SideBar";

const Transfers = ({
  recoverySelectValue,
  recoverySelectValueRet,
  getDataTransfer,
  result,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const typeAccount = result.map((item) => item.typeAccount).toString();
    if (typeAccount === "false") {
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
      <h1 className="entry-question"> ¿Qué deseas hacer?</h1>
      <hr className="line" />
      <section className="container-saider-form">
        <SideBar />
        <form
          className="all-form"
          onSubmit={(e) => {
            e.preventDefault()
            handleClick();
          }}
        >
          <h1>Ingresa los datos de la operación</h1>
          <p className="transfer-p">
            Podrás transferir a cualquier banco, pagar tarjetas de crédito y
            servicios, y órdenes de pago.
          </p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label htmlFor="inputGroupSelect01" className="form-label">
                Cuenta de retiro:
              </label>
              <select
                name="seleccione una opción"
                className="form-select"
                id="inputGroupSelect01"
                placeholder="Seleccione una opción"
                onChange={(e) => {
                  recoverySelectValueRet(e);
                }}
                required >
                <option defaultValue="">
                  Seleccione una opción
                </option>
                {getDataTransfer.map(
                  (item) =>
                    item.typeAccount && (
                      <option key={item.id} value={item.id}>
                        {item.name} - {item.displayAccountNumber.slice(-3)}{" "}
                        Disponible: MXN{item.balance}
                      </option>
                    )
                )}
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>

            <div className="col-md-5">
              <label>Cuenta de deposito:</label>
              <select
                className="form-select"
                id="inputGroupSelect01"
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
            </div>
          </div>
          <button className="update-account">
            <i className="bi bi-caret-right-fill"></i> Actualizar cuenta(s)
          </button>

          <div className="transferButtons">
            <button type="submit" className="continue">
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                handleCancel();
              }}
            >
              <i className="bi bi-caret-right-fill"></i>Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Transfers;
