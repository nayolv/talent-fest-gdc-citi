import React from 'react'
import CardPayment from '../pages/CardPayment'


const Sidebar4 = () => {
    return (
        <>
        
        <section className="menu">
                <div className="container d-flex"> 
            <ul className="navbar-nav w-30"> {/* "nav nav-pills nav-fill" */}
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
            <CardPayment />
        </section>
        </>
       
    )
}

export default Sidebar4 