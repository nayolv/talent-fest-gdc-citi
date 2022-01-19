import React from 'react'
import { Link } from 'react-router-dom'

export const NavUser = () => {
    return (
        <section className="shadow p-3 mb-5 bg-white container-nav-user">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
          <i className="bi bi-house-door"></i>
            <p className="nav-home" aria-current="page">
            <Link to="/"> Inicio </Link> 
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-coin"></i>
            <p className="nav-transfer">
            <Link to="Services"> Transferencias y pagos </Link>
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-graph-up-arrow"></i>
            <a className="nav-investment" href="#">
              Inversiones
            </a>
          </li>
          <li className="nav-item">
          <i className="bi bi-credit-card"></i>
            <a className="nav-others" href="#">
             Otros productos
            </a>
          </li>
          <li className="nav-item">
          <i className="bi bi-gear"></i>
            <a className="nav-setting" href="#">
              Configuración
            </a>
          </li>
          <li className="nav-item">
          <i className="bi bi-question-circle"></i>
            <a className="nav-help" href="#">
              Ayuda
            </a>
          </li>
        </ul>
      </section>
    )
}
