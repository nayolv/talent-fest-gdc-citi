import React from 'react'
import "../Scss/Layout/sidebar.scss"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <section className="menu">
        <div className="container d-flex">
          <ul className="navbar-nav w-60">
            <li>
          
              <Link className="nav-link" to="/services">
                Transferir o pagar
              </Link>
            </li>
            <hr />
            <li>
              <Link  className="nav-link" to="/services/register">
                Dar de alta cuenta, tarjeta, servicio, otros
              </Link>
            </li>
            <hr />
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Modificar altas
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Pagar impuestos
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link active dropdown-toggle" to="#">
                Comprobantes
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                CDMX
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Comprobante electrónico de pago interbancario(CEP)
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Ver movimientos de BancaNet
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link disabled" to="#">
                Domiciliar un pago
              </Link>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
