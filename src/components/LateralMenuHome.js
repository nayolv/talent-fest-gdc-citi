import React from 'react'

export const LateralMenuHome = ({ tooltip }) => {
    return (
        <div className='menu-lateral-home-container'>
        <h3 id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Acciones rápidas"}>Acciones rápidas</h3>
           <section className='btns-lateral-container'>
           <section className='lateral-btns-home-container'>
           <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Pagar tarjeta de crédito"}><i className="bi bi-credit-card" />Pagar tarjeta de crédito</button>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Descargar estados de cuenta"}><i className="bi bi-file-earmark-text"/>Descargar estados de cuenta</button>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Configurar notificaciones"}><i className="bi bi-bell"/>Configurar notificaciones</button>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Ver movimientos de BancaNet"}><i className="bi bi-cash-stack"/>Ver movimientos de BancaNet</button>
            </section>

            <section className='second-laterl-btns-home-container'>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Comprobante electrónico de pago (CEP)"}><i className="bi bi-file-earmark-text"/>Comprobante electrónico de pago (CEP)</button>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Redisponer crédito"}><i className="bi bi-coin" />Redisponer crédito</button>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Reportar robo o extravío de tarjeta"}><i className="bi bi-exclamation-diamond"></i>Reportar robo o extravío de tarjeta</button>
            </section>

            <section className='image-lateral-container'>
                <img src="https://i.ibb.co/ck9c3yY/oficina.png" alt="Ofertas citibanamex" />
                <section>
                <p id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Las ofertas Citibanamex están pensadas en ti. ¡Conócelas!"}>Las ofertas Citibanamex están pensadas en ti. ¡Conócelas!</p>
                </section>
                <section>
                <button id={tooltip ? "" : "tooltip"}  data-info={tooltip ? "" : "Me interesa"}>Me interesa</button>
                </section>
            </section>
           </section>
        </div>
    )
}
