import { NavUserTooltip } from "./NavUserTooltip";
import '../Scss/Layout/Tooltip.scss'

export const HeaderNavTooltip = ({ getDataTransfer }) => {
  const date = new Date();

  let user;
  const getUser = () => {
    // eslint-disable-next-line array-callback-return
    getDataTransfer.map((item) => {
      if (item.typeAccount) {
        user = item.client;
      }
    });
  };
  getUser();

  return (
    <header className="header-nav">
      <section className="section-nav">
        <p className="date" id="tooltip" data-info={date.toUTCString()}>{date.toUTCString()}</p>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="https://www.banamex.com/es/localizador-sucursales.html"
              id="tooltipHeader" 
              data-info='SUCURSALES'
            >
              SUCURSALES
            </a>
          </li>
          <li className="float-left">|</li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              id="tooltipHeader" 
              data-info='CONTÁCTANOS'
              role="button"
              aria-expanded="false"
            >
              CONTÁCTANOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://bancanet.banamex.com/contacto/llamanos.html"
                >
                  <i className="bi bi-chat-right-fill"></i>Llámanos
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://bancanet.banamex.com/contacto/queremos-escucharte.html"
                >
                  <i className="bi bi-telephone-outbound-fill"></i>Queremos
                  escucharte
                </a>
              </li>
            </ul>
          </li>
          <li className="float-left">|</li>
          <li className="nav-item">
            <a
              className="nav-link nav-help"
              href="https://www.banamex.com/SoporteBanamex/index.html?lid=MX|BNP3|MULTISALDOS-TextoBotton-02102017-AyudaBNP-irLearningCenter-ES"
              id="tooltipHeader" 
              data-info='AYUDA'
            >
              AYUDA
            </a>
          </li>
        </ul>
      </section>
      <section className="conteiner-nav-bar">
        <img
          src="https://i.ibb.co/p0SR7nc/by-GDC.png"
          alt="link-Citibanamex"
          className="Brand-citibanamex"
        />

        <ul>
          <li className="float">
            |
            <a className="bancanet" href="https://www.banamex.com/"
                 id="tooltip" 
                 data-info='BancaNet'>
              BancaNet
            </a>
          </li>

        </ul>
        {/* <img src={logOut} alt="logOut" className="logo-out" />
        <p className="text-logout">Cerrar sesión</p> */}
      </section>
      <section className="container-welcome">
        <h2 className="welcome"  id="tooltip" 
                 data-info={`¡Hola${user}!`}> ¡Hola {user}!</h2>
        {/* <p className= "last-access">último acceso {date.toDateString()}</p> */}
      </section>
      <NavUserTooltip />
    </header>
  );
};
