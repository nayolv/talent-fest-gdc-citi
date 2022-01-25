import { NavUser } from "./NavUser";

export const HeaderNav = ({ getDataTransfer, tooltipOn }) => {
  const date = new Date();

  let user;
  const getUser = () => {
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
        <p
          className="date"
          id={tooltipOn ? "" : "tooltipHeader"}
          data-info={tooltipOn ? "" : `${date.toUTCString()} `}
        >
          {date.toUTCString()}
        </p>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="https://www.banamex.com/es/localizador-sucursales.html"
              id={tooltipOn ? "" : "tooltipHeader"}
              data-info={tooltipOn ? "" : "SUCURSALES"}
            >
              SUCURSALES
            </a>
          </li>
          <li className="float-left" aria-hidden="true">
            |
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="link"
              role="button"
              aria-expanded="false"
              id={tooltipOn ? "" : "tooltipHeader"}
              data-info={tooltipOn ? "" : "CONTÁCTANOS"}
            >
              CONTÁCTANOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://bancanet.banamex.com/contacto/llamanos.html"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={tooltipOn ? "" : "Llámanos"}
                >
                  <i className="bi bi-chat-right-fill" aria-hidden="true"></i>Llámanos
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://bancanet.banamex.com/contacto/queremos-escucharte.html"
                  id={tooltipOn ? "" : "tooltip"}
                  data-info={tooltipOn ? "" : "Queremos escucharte"}
                >
                  <i className="bi bi-telephone-outbound-fill"aria-hidden="true"></i>Queremos
                  escucharte
                </a>
              </li>
            </ul>
          </li>
          <li className="float-left" aria-hidden="true">
            |
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-help"
              href="https://www.banamex.com/SoporteBanamex/index.html?lid=MX|BNP3|MULTISALDOS-TextoBotton-02102017-AyudaBNP-irLearningCenter-ES"
              id={tooltipOn ? "" : "tooltipHeader"}
              data-info={tooltipOn ? "" : "AYUDA"}
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
          <li className="float" aria-hidden="true">
            |
            <a
              className="bancanet"
              href="https://www.banamex.com/"
              id={tooltipOn ? "" : "tooltip"}
              data-info={tooltipOn ? "" : "BancaNet"}
            >
              BancaNet
            </a>
          </li>
        </ul>
        {/* <img src={logOut} alt="logOut" className="logo-out" />
        <p className="text-logout">Cerrar sesión</p> */}
      </section>
      <section className="container-welcome">
        <h2
          className="welcome"
          id={tooltipOn ? "" : "tooltip"}
          data-info={tooltipOn ? "" : `¡Hola ${user}!`}
        >
          {" "}
          ¡Hola {user}!
        </h2>
        {/* <p className= "last-access">último acceso {date.toDateString()}</p> */}
      </section>
      <NavUser tooltipOn={tooltipOn}/>
    </header>
  );
};
