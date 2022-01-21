import React from 'react'

const Page3 = () => {
    return (
        <>
        <form>
        <h1>Ingresa los datos de la operación</h1>    
        <p>Podrás transferir a cualquier banco, pagar tarjetas de crédito y servicios, y órdenes de pago.</p>
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
        <button className="cancel"> Actualizar cuenta(s)</button>
        <hr />
        <div className ="transferButtons">
        <button type="button" className="continue">Continuar</button>
        <button type="button" className="cancel">Cancelar</button>
        </div>
        </form>
        </>
    )
}

export default Page3
