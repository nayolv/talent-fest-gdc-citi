import React from "react";
import { useTransfers } from "../hooks/useTransfers";
import '../Scss/Layout/Tooltip.scss'

export const OfertasHomeTooltip = () => {
 const { getDataTransfer } = useTransfers();
 const ownAccounts = getDataTransfer.filter((item) => item.typeAccount=== true);

 return (
    <div className="container-home ">
      <section className="offers-container">
        <h2 id="tooltip" data-info="Ofertas Citibanamex">Ofertas Citibanamex</h2>

        <section className="cards-offer-home">

          <section className="card-home">
            <img
              src="https://i.ibb.co/WF72Xmr/Bobby-brown.png"
              alt="Oferta Bobby Brown, 15% de descuento"
            />
            <section className="text-promotion-container">
              <p className="title-card-home" id="tooltip" data-info="Bobby Brown">Bobby Brown</p>
              <p id="tooltip" data-info="15% de descuento">15% de descuento</p>
            </section>
          </section>

          <section className="card-home">
            <img
              src="https://i.ibb.co/253XCyR/familia.png"
              alt="Oferta pase anual 6 meses sin intereses al inscribirte"
            />
            <section className="text-promotion-container">
              <p className="title-card-home" id="tooltip" data-info="Pase Anual Citibanamex">Pase Anual Citibanamex</p>
              <p id="tooltip" data-info="Inscríbete y obtén 6 MSI">Inscríbete y obtén 6 MSI</p>
            </section>
          </section>
        </section>

        <section className="middle-home-banner-container">
          <img
            src="https://i.ibb.co/dGrVKLX/promo-ejemplo.png"
            alt="Link, Esta es una promocion de banamex"
          />
        </section>
      </section>

      <section className="container-acconts">
      <p id="tooltip" data-info="Cuentas de efectivo">Cuentas de efectivo</p>

      {ownAccounts.map(item=>(
        <section key={item.id} className="acconts-client-home-container">
        <section className="card-home-container">
          <img
            src="https://www.banamex.com/landings/tarjetas-de-debito/img/desktop/PerfilEjecutivo.png"
            alt="tarjeta banamex perfil ejecutivo"
          />
          <section>
            <a href="./cualquiercosa" id="tooltip" data-info={`${item.name}-MXN`}>{item.name}-MXN</a>
            <p className="account-number" id="tooltip" data-info={`**${item.displayAccountNumber.slice(-3)}`}>{item.displayAccountNumber.slice(-3)}</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p id="tooltip" data-info="Disponible:">Disponible:</p>
          <section>
            <p className="balance" id="tooltip" data-info={`${item.maximumAmount}MXN`}>{item.maximumAmount}</p> 
            <p /* id="tooltip" data-info="MXN" */>MXN</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p id="tooltip" data-info="Saldo:">Saldo:</p>
          <section>
            <p className="balance" id="tooltip" data-info={`${item.balance}MXN`}>{item.balance}</p> 
            <p /* id="tooltip" data-info="MXN" */>MXN</p>
          </section>
        </section>
      </section>
      ))}

     </section>

    </div>
  );
};
