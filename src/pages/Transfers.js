import React from 'react'
import transfer from '../Scss/Layout/transfer.scss'

const Transfers = () => {
    return (
        <>
        <form>
        <h1>Ingresa los datos de la operación</h1>    
        <p>Podrás dar de alta cuentas, tarjetas, celulares, créditos, servicios y ordenes de pago.</p>
        <br />
        <br />
        <p>¿Qué deseas dar de alta?</p>
        <div className ="container">
                <div className ="col-md-5">
                    <select name="seleccione una opción" className="form-control" placeholder="Seleccione una opción">
                    <option defaultValue={"Seleccione una opción"}>Seleccione una opción</option>
                    <option >Cuenta Citibanamex</option>
                    <option >CuentaCLABE</option>
                    <option >Tarjeta debito o crédito</option>
                    <option >Número celular ligado a la cuenta</option>
                    <option >Número de contrato</option>
                    <option >Sucursal y cuenta</option>
                    </select>
            </div>
        </div>   
        <hr />
        <div className ="transferButtons">
        <button type="button" className="continue">Continuar</button>
        <button type="button" className="cancel">Cancelar</button>
        </div>
        <p className ="reminder">Recuerda que ningún ejecutivo de Citibanamex nunca te llamará para dar de alta una cuenta, ya sea como prueba, asesoría o</p>
        <p  className ="reminder">para proteger tu dinero. Si recibes llamadas de este tipo cuelga, ya que es un fraude</p>
        </form>
        </>
    )
}

export default Transfers
