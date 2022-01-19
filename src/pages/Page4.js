import React from 'react'

const Page4 = () => {
    return (
     
     <>
        <form>
        <h1>Cuentas Citibanamex</h1>    
        <p>Indica los datos de la transferencia y da click en continuar</p>
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
                    <label>Cuenta de déposito:</label>
                    <select name="seleccione una opción" className="form-control" placeholder="Seleccione una opción">
                    <option defaultValue="Seleccione una opción">Seleccione una opción</option>
                    </select>
            </div>

            <div className="input-group mb-3">
                 <span className="input-group-text">$</span>
                 <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>



            <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                 <label className="form-check-label" >
                Programar a fecha futura:
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" >
                Cuenta concentradora
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label">
                Referencias
                </label>
            </div>

        <p>Descripción para identificar la transferencia</p>
       
        <div className='transferText'>
        <p>transferencia </p>
        <p>(opcional)</p>
        </div>

        <input className='form-control-sm'></input>

        <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label">
                Notificar al beneficiario(opcional):
                </label>
            </div>
        </div>

        <hr/>

        <div className ="transferButtons">
        <button type="button" className="continue">Continuar</button>
        <button type="button" className="cancel">Cancelar</button>
        </div>
        </form>
    </>
    
    )
}

export default Page4
