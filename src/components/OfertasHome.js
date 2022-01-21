import React from "react";

export const OfertasHome = () => {
  return (
    <div className="container-home ">
      <section className="offers-container">
        <h1>Ofertas Citibanamex</h1>

        <section className="cards-offer-home">

          <section className="card-home">
            <img
              src="https://i.ibb.co/WF72Xmr/Bobby-brown.png"
              alt="Oferta Bobby Brown, 15% de descuento"
            />
            <section className="text-promotion-container">
              <p className="title-card-home">Bobby Brown</p>
              <p>15% de descuento</p>
            </section>
          </section>

          <section className="card-home">
            <img
              src="https://i.ibb.co/253XCyR/familia.png"
              alt="Oferta pase anual 6 meses sin intereses al inscribirte"
            />
            <section className="text-promotion-container">
              <p className="title-card-home">Pase Anual Citibanamex</p>
              <p>Inscríbete y obtén 6 MSI</p>
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
      <h2>Cuentas de efectivo</h2>
      <section className="acconts-client-home-container">
        <section className="card-home-container">
          <img
            src="https://www.banamex.com/landings/tarjetas-de-debito/img/desktop/PerfilEjecutivo.png"
            alt="tarjeta banamex perfil ejecutivo"
          />
          <section>
            <a href="./cualquiercosa">Cuenta perfil ejecutivo-MXN</a>
            
            <p className="account-number">**195</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p>Disponible:</p>
          <section>
            <p className="balance">10,054.79</p> 
            <p>MXN</p>
          </section>
        </section>

        <section className="avalaible-container">
          <p>Saldo:</p>
          <section>
            <p className="balance">10,054.79</p> 
            <p>MXN</p>
          </section>
        </section>

      </section>
     </section>

    </div>
  );
};

/*

<img src="" alt="familia" border="0"></a>
<img src="https://i.ibb.co/WF72Xmr/Bobby-brown.png" alt="Bobby-brown" border="0"></a>

*/
