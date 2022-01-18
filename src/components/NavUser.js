import React from 'react'

export const NavUser = () => {
    return (
        <section className="shadow p-3 mb-5 bg-white container-nav-user">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
          <i className="bi bi-house-door"></i>
            <a className="nav-home" aria-current="page" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
          <i className="bi bi-coin"></i>
            <a className="nav-transfer" href="#">
              Transferencias y pagos
            </a>
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
