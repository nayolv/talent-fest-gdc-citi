import "../../../Scss/Layout/transfer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Scss/Layout/DataTranfer.scss";
import "../../../Scss/Layout/Modal.scss";
import SideBar from "../../SideBar";
import { ModalSia } from "../../modal/ModalSia";

const AccountRegister = ({
  sendData,
  handleInputChange,
  checked,
  handleChecked,
  tooltipOn,
}) => {
  const navigate = useNavigate();
  /*   const [checked, setChecked] = useState(false);
  const handleChecked = (e) => {
    setChecked((!checked))
    console.log(e.target.checked)
}; */

  return (
    <>
      <h1 className="entry-question"
      id={tooltipOn ? "" : "tooltip"}
      data-info={tooltipOn ? "" : "¿Qué deseas hacer?"}

      > ¿Qué deseas hacer?</h1>
      <hr />
      <section className="container-saider-form">
        <SideBar />
        <form
          className="all-form"
          onSubmit={(e) => {
            sendData(e);
            navigate("/services/verification");
          }}
        >
          <h1
          id={tooltipOn ? "" : "tooltip"}
          data-info={tooltipOn ? "" : "Alta de cuenta Citibanamex"}
          >Alta de cuenta Citibanamex</h1>
          <p
          id={tooltipOn ? "" : "tooltip"}
          data-info={tooltipOn ? "" : 'Indica los datos del alta y da click en "Continuar"'}>
            Indica los datos del alta y da click en "Continuar"</p>
          <br />
          <br />
          <div className="container">
            <div className="col-md-5">
              <label htmlFor="name" aria-label="datoCuenta"
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : '¿Qué dato tienes de la cuenta para darla de alta?'}>
                ¿Qué dato tienes de la cuenta para darla de alta?
              </label>
              <select
                className="form-select"
                aria-label="SeleccionaTarjeta"
                id="name"
                placeholder="Tarjeta de debito o crédito"
                name="name"
                onChange={handleInputChange}
                required
              >
                <option defaultValue="Seleccione una opción"
                 id={tooltipOn ? "" : "tooltip"}
                 data-info={tooltipOn ? "" : 'Seleccione una opción'}
                 >
                  Seleccione una opción
                </option>
                <option
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : 'Mi Cuenta Citibanamex'}>Mi Cuenta CitiBanamex</option>
                <option
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : 'Cuenta Priority CitiBanamex'}>Cuenta Priority CitiBanamex</option>
              </select>
            </div>
            <br />
            <p className="pLabels"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : 'Numero de tarjeta:'}>Numero de tarjeta:</p>
        ------    <input
              className="form-control"
              type="number"
              aria-label="numero de tarjeta"
              name="displayAccountNumber"
              onChange={handleInputChange}
              required
            ></input>
            <div className="form-check">
              <input
                className="form-check-input"
                aria-label="check cuenta Propia"
                type="checkbox"
                id="flexCheckChecked"
                name="controlled"
                checked={checked}
                onChange={(e) => {
                  handleChecked();
                  console.log(!checked); //Negar check
                }}
      --------        />
              <label aria-label="cuenta propia" className="form-check-label"
               id={tooltipOn ? "" : "tooltip"}
               data-info={tooltipOn ? "" : 'Cuenta propia'} >Cuenta propia</label>
            </div>
            <p className="pLabels"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : 'Titular de la cuenta'}>Titular de la cuenta</p>
       ----     <input
              aria-label="titular de Cuenta"
              className="form-control"
              type="text"
              name="client"
              onChange={handleInputChange}
              required
            ></input>
            <br />
            <p className="pLabels"
             id={tooltipOn ? "" : "tooltip"}
             data-info={tooltipOn ? "" : 'Monto máximo que autorizas pagar a este beneficiario:'}>
              Monto máximo que autorizas pagar a este beneficiario:
            </p>
            <div className="input-group mb-3 input-amount">
              <span className="input-group-text"
               id={tooltipOn ? "" : "tooltip"}
               data-info={tooltipOn ? "" : 'MXN'}>MXN</span>
        -----      <input
                type="text"
                aria-label="cantidad"
                name="maximumAmount"
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
            <p className="pLabels"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : 'Correo electrónico (opcional)'}>Correo electrónico (opcional):</p>
     ------       <input
              type="email"
              className="form-control"
              name="email"
              aria-label="correo electronico"
              onChange={handleInputChange}
              required
            ></input>
            <p className="pLabels"
             id={tooltipOn ? "" : "tooltip"}
             data-info={tooltipOn ? "" : 'Confirmar correo electrónico:'}>Confirmar correo electrónico:</p>
            <input type="email" aria-label="confirmar correo electronico" className="form-control" required></input>
          </div>
          <div className="transferButtons">
            <button type="submit" className="continue">
              Continuar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={() => {
                navigate("/services");
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
        <ModalSia />
      </section>
    </>
  );
};

export default AccountRegister;
