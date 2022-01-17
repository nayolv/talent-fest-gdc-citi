import React from 'react'
import "../sass/sidebar.scss"

const SideBar = () => {
    return (
        <>
        <header className ="entry-question"> ¿Qué deseas hacer?</header>
        <hr />
        <section className= "col-3 border-sm">
            <div className="container d-flex"> 
            <ul className="navbar-nav w-100"> {/* "nav nav-pills nav-fill" */}
            <li className ="nav-item"><a className="nav-link active" href="#">Transferir o pagar</a></li>
            <hr />
            <li className ="nav-item"> <a className="nav-link active" href="#">Dar de alta cuenta, tarjeta, servivio, otros</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">Modificar altas</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">Pagar impuestos</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active dropdown-toggle" href="#">Comprobantes</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">CDMX</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">Comprobante electrónico de pago interbancario(CEP)</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">Ver movimientos de BancaNet</a></li>
            <hr />
            <li className ="nav-item"><a className="nav-link active" href="#">Domiciliar un pago</a></li>
            </ul>
            </div> 
        </section>
        </>
    )
}

export default SideBar
