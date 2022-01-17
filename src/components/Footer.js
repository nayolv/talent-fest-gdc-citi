import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="col-md-4 d-flex align-items-center ">
          <a href="https://www.banamex.com/es/" className="link-primary">
            Citibanamex.com
          </a>
          <div className="links">
            <a href="https://bancanet.banamex.com/JFP/regional/documents/contrato_marzo_2011.pdf" className="link-primary">
              Ver contrato de Banca Electrónica
            </a>
            <a href="https://www.banamex.com/es/terminos_condiciones.htm?icid=Texto-TerminosCondiciones-Footer-Avatar-05282015-Int-ES" className="link-primary">
              Términos, condiciones y aviso de privacidad
            </a>
          </div>
        </div>
        <div className="autor d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <span className="text-muted">© 2022 GDC, Talent-Fest</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
