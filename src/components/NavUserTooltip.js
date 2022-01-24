import React from 'react'
import { Link } from 'react-router-dom'

export const NavUserTooltip = () => {
    return (
  
        <section className="shadow p-3 mb-5 bg-white container-nav-user">  
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
          <i className="bi bi-house-door"></i>
            <p className="nav-home" aria-current="page">
            <Link to="/" id="tooltip" data-info="Inicio"> Inicio </Link> 
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-coin"></i>
            <p className="nav-transfer">
            <Link to="services" id="tooltip" data-info="Transferencias y pagos"> Transferencias y pagos </Link>
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-graph-up-arrow"></i>
            <Link className="nav-investment" to="#" id="tooltip" data-info="Inversiones">
              Inversiones
            </Link>
          </li>
          <li className="nav-item">
          <i className="bi bi-credit-card"></i>
            <p className="nav-others" id="tooltip" data-info="Otros productos">
             Otros productos
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-gear"></i>
            <p className="nav-setting" id="tooltip" data-info="Configuración">
              Configuración
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-question-circle"></i>
            <p className="nav-help" id="tooltip" data-info="Ayuda">
              Ayuda
            </p>
          </li>
        </ul>
      </section>
    )
}
