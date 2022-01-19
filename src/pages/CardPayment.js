import React from 'react'

const CardPayment = () => {
    return (
        <>
        <form>
        <h1>Pago a tarjetas Citibanamex</h1>    
        <p>Indica los datos de la transferencia y da click en "Continuar</p>
        <br />
        <br />
        <div className ="container">
            <div className ="col-md-5">
                    <label>Cuenta de retiro:</label>
                    <select name="seleccione una opción" className="form-control" placeholder="Seleccione una opción">
                    <option defaultValue="Seleccione una opción">Seleccione una opción</option>
                    </select>
            </div>
       

            <div className ="col-md-5">
                    <label>Cuenta de deposito:</label>
                    <select name="seleccione una opción" className="form-control" placeholder="Seleccione una opción">
                    <option defaultValue="Seleccione una opción">Seleccione una opción</option>
                    </select>
            </div>
        </div>  
            <label>Importe:</label>
            <br />
            <label>Otra cantidad:</label>

            <div className="input-group mb-3">
                 <span className="input-group-text">MXN</span>
                 <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" >
                Programar a fecha futura
                </label>
            </div>


        <hr />
        <div className ="transferButtons">
        <button className="continue">Continuar</button>
        <button type="button" className="cancel">Cancelar</button>
        </div>
        </form>
        </>
    )
}

export default CardPayment
