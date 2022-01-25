import React from "react";
import { Link } from "react-router-dom";

export const NavUser = ({ tooltipOn }) => {
  return (
    <section className="shadow p-3 mb-5 bg-white container-nav-user">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <i className="bi bi-house-door" aria-hidden="true"></i>
          <p
            className="nav-home"
            aria-current="page"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Inicio"}
          >
            <Link to="/"> Inicio </Link>
          </p>
        </li>
        <li className="nav-item">
          <i className="bi bi-coin"aria-hidden="true"></i>
          <p
            className="nav-transfer"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Transferencias y pagos"}
          >
            <Link to="services"> Transferencias y pagos </Link>
          </p>
        </li>
        <li className="nav-item">
          <i className="bi bi-graph-up-arrow"aria-hidden="true"></i>
          <Link
            className="nav-investment"
            to="#"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Inversiones"}
          >
            Inversiones
          </Link>
        </li>
        <li className="nav-item">
          <i className="bi bi-credit-card"aria-hidden="true"></i>
          <p
            className="nav-others"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Otros productos"}
          >
            Otros productos
          </p>
        </li>
        <li className="nav-item">
          <i className="bi bi-gear" aria-hidden="true"></i>
          <p
            className="nav-setting"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Configuración"}
          >
            Configuración
          </p>
        </li>
        <li className="nav-item">
          <i className="bi bi-question-circle"aria-hidden="true"></i>
          <p
            className="nav-help"
            id={tooltipOn ? "" : "tooltip"}
            data-info={tooltipOn ? "" : "Ayuda"}
          >
            Ayuda
          </p>
        </li>
      </ul>
    </section>
  );
};
