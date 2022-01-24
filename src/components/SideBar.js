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
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
