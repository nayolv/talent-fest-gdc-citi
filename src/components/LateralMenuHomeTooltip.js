import React from 'react'

export const LateralMenuHomeTooltip = () => {
    return (
        <div className='menu-lateral-home-container'>
        <h3 id="tooltip" data-info="Acciones rápidas">Acciones rápidas</h3>
           <section className='btns-lateral-container'>
           <section className='lateral-btns-home-container'>
                <button id='tooltip' data-info="Pagar tarjeta de crédito"><i className="bi bi-credit-card" />Pagar tarjeta de crédito</button>
                <button id='tooltip' data-info="Descargar estados de cuenta"><i className="bi bi-file-earmark-text"/>Descargar estados de cuenta</button>
                <button id='tooltip' data-info="Configurar notificaciones"><i className="bi bi-bell"/>Configurar notificaciones</button>
                <button id='tooltip' data-info="Ver movimientos de BancaNet"><i className="bi bi-cash-stack"/>Ver movimientos de BancaNet</button>
            </section>

            <section className='second-laterl-btns-home-container'>
                <button id='tooltip' data-info="Comprobante electrónico de pago (CEP)"><i className="bi bi-file-earmark-text"/>Comprobante electrónico de pago (CEP)</button>
                <button id='tooltip' data-info="Redisponer crédito"><i className="bi bi-coin" />Redisponer crédito</button>
                <button id='tooltip' data-info="Reportar robo o extravío de tarjeta"><i className="bi bi-exclamation-diamond"></i>Reportar robo o extravío de tarjeta</button>
            </section>

            <section className='image-lateral-container'>
                <img src="https://i.ibb.co/ck9c3yY/oficina.png" alt="Ofertas citibanamex" />
                <section>
                <p id="tooltip" data-info="Las ofertas Citibanamex están pensadas en ti. ¡Conócelas!">Las ofertas Citibanamex están pensadas en ti. ¡Conócelas!</p>
                </section>
                <section>
                <button id='tooltip' data-info="Me interesa">Me interesa</button>
                </section>
            </section>
           </section>
        </div>
    )
}
