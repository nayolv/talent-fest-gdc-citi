import React from "react";
import { ThemeContext } from "./modal/Context";
import '../Scss/Layout/Tooltip.scss'

const FooterTooltip = () => {

  const {changeColor, setChangeColor} = React.useContext(ThemeContext)

  return (
    <div>
      <footer style = { {background: changeColor.background} }>
        <div className="col-md-4 d-flex align-items-center ">
          <a href="https://www.banamex.com/es/" className="link-primary" id="tooltip" data-info="Citibanamex.com">
            Citibanamex.com
          </a>
          <div className="links">
            <a href="https://bancanet.banamex.com/JFP/regional/documents/contrato_marzo_2011.pdf" className="link-primary" id="tooltip" data-info="Ver contrato de Banca Electrónica">
              Ver contrato de Banca Electrónica
            </a>
            <a href="https://www.banamex.com/es/terminos_condiciones.htm?icid=Texto-TerminosCondiciones-Footer-Avatar-05282015-Int-ES" className="link-primary" id="tooltip" data-info="Términos, condiciones y aviso de privacidad">
              Términos, condiciones y aviso de privacidad
            </a>
          </div>
        </div>
        <div className="autor d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <span className="text-muted" id="tooltip" data-info="© 2022 GDC, Talent-Fest">© 2022 GDC, Talent-Fest</span>
        </div>
      </footer>
    </div>
  );
};

export default FooterTooltip;
