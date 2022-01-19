import React from 'react'

const AccountRegistration = () => {
    return (
        <>
        <form>
        <h1>Alta de cuenta Citibanamex</h1>    
        <p>Indica los datos del alta y da click en "Continuar</p>
        <br />
        <br />
        <div className ="container">
            <div className ="col-md-5">
                    <label>¿Qué dato tienes de la cuenta para darla de alta?</label>
                    <select name="seleccione una opción" className="form-control" placeholder="Tarjeta de debito o crédito">
                    <option defaultValue="Seleccione una opción">Seleccione una opción</option>
                    <option>Débito</option>
                    <option>Crédito</option>
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
        <button>Continuar</button>
        <button>Cancelar</button>
        </div>
        </form>
        </>
    )
}

export default AccountRegistration
