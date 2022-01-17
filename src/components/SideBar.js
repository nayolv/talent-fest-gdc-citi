import React from 'react'
import "../sass/sidebar.scss"

const SideBar = () => {
    return (
        <>
        <h1 className ="entry-question"> ¿Qué deseas hacer?</h1>
        <hr />
        <section className= "col-3 border-sm">
            <div className="container d-flex"> 
            <ul className="navbar-nav w-100"> {/* "nav nav-pills nav-fill" */}
            <li className ="nav-item"><a className="nav-link active" href="#">Transferir o pagar</a></li>
            <hr />
            <li className ="nav-item"> <a className="nav-link active" href="#">Dar de alta cuenta, tarjeta, servivio, otros</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Modificar altas</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Pagar impuestos</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active dropdown-toggle" href="#">Comprobantes</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">CDMX</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Comprobante electrónico de pago interbancario(CEP)</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Ver movimientos de BancaNet</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link disabled" href="#">Domiciliar un pago</a></li>
            </ul>
            </div> 
        </section>
        </>
    )
}

export default SideBar
