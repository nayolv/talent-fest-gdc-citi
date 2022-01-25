import React from "react";
import { useTransfers } from "../hooks/useTransfers";

export const OfertasHome = ({ tooltipOn }) => {
  const { getDataTransfer } = useTransfers();
  const ownAccounts = getDataTransfer.filter(
    (item) => item.typeAccount === true
  );

  return (
    <div className="container-home ">
      <section className="offers-container">
        <h2
          id={tooltipOn ? "" : "tooltip"}
          data-info={tooltipOn ? "" : "Ofertas Citibanamex"}
        >
          Ofertas Citibanamex
        </h2>

        <section className="cards-offer-home">
          <section className="card-home">
            <img
              src="https://i.ibb.co/WF72Xmr/Bobby-brown.png"
              alt="Oferta Bobby Brown, 15% de descuento"
            />
            <section className="text-promotion-container">
              <p
                className="title-card-home"
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Bobby Brown"}
              >
                Bobby Brown
              </p>
              <p
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "15% de descuento"}
              >
                15% de descuento
              </p>
            </section>
          </section>

          <section className="card-home">
            <img
              src="https://i.ibb.co/253XCyR/familia.png"
              alt="Oferta pase anual 6 meses sin intereses al inscribirte"
            />
            <section className="text-promotion-container">
              <p
                className="title-card-home"
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Pase Anual Citibanamex"}
              >
                Pase Anual Citibanamex
              </p>
              <p
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Inscríbete y obtén 6 MSI"}
              >
                Inscríbete y obtén 6 MSI
              </p>
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
        <h3
          id={tooltipOn ? "" : "tooltip"}
          data-info={tooltipOn ? "" : "Cuentas de efectivo"}
        >
          Cuentas de efectivo
        </h3>

        {ownAccounts.map((item) => (
          <section key={item.id} className="acconts-client-home-container">
            <section className="card-home-container">
              <img
                src="https://www.banamex.com/landings/tarjetas-de-debito/img/desktop/PerfilEjecutivo.png"
                alt="tarjeta banamex perfil ejecutivo"
              />
              <section>
                <a
                  href="./cualquiercosa"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={tooltipOn ? "" : `${item.name}-MXN`}
                >
                  {item.name}-MXN
                </a>
                <p aria-level="3"
                  className="account-number"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={
                    tooltipOn ? "" : `**${item.displayAccountNumber.slice(-3)}`
                  }
                >
                  **{item.displayAccountNumber.slice(-3)}
                </p>
              </section>
            </section>

            <section className="avalaible-container">
              <p
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Disponible:"}
              >
                Disponible:
              </p>
              <section>
                <p
                  className="balance"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={tooltipOn ? "" : `${item.maximumAmount}MXN`}
                >
                  {item.maximumAmount}
                </p>
                <p>MXN</p>
              </section>
            </section>

            <section className="avalaible-container">
              <p
                id={tooltipOn ? "" : "tooltip"}
                data-info={tooltipOn ? "" : "Saldo:"}
              >
                Saldo:
              </p>
              <section>
                <p
                  className="balance"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={tooltipOn ? "" : `${item.balance}MXN`}
                >
                  {item.balance}
                </p>
                <p>MXN</p>
              </section>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

/*

<img src="" alt="familia" border="0"></a>
<img src="https://i.ibb.co/WF72Xmr/Bobby-brown.png" alt="Bobby-brown" border="0"></a>

*/
