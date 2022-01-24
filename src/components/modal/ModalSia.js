import React from "react";
import { ThemeContext } from "./Context";
/* import {Body} from "./Body" */

export const ModalSia = ({ isTooltipOn }) => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  const { changeColor, setChangeColor } = React.useContext(ThemeContext);

  const refreshPage = () => {
    window.location.reload();
  };

  const activeZoom = () => {
    const nodeList = document.querySelectorAll(
      "h1, h2, p, a, input, label, link, .continue, .cancel, .update-account, td, h3, #print, .sm, imputGroupSelect01, select"
    );
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add("zoom-Txt");
    }
  };

  const handleAction = () => {
    isTooltipOn();
    activeZoom();
  }

  return (
    <>
      <button
        type="button"
        className="btn-accesibility"
        data-bs-toggle="modal"
        data-bs-target="#accesibilityModal"
      >
        <img
          src="https://i.ibb.co/9HHy2Q8/Dise-o-sin-t-tulo-5-2.png"
          alt="botón de accesibilidad"
        />
      </button>

      <div
        className="modal fade modal-sia"
        id="accesibilityModal"
        tabIndex="-1"
        aria-label="accesibilityModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <button
                className={theme === "dark" ? clickedClass : ""}
                id="darkmode"
                onClick={(e) => {
                  switchTheme(e);
                }}
              >
                <img src="https://i.ibb.co/0QC1rGZ/luna.png" alt="luna" />
                Modo oscuro
                <br />
                (Contraste)
              </button>
              {/* <button
                className="btn-sia"
                data-bs-dismiss="modal"
                onClick={() => {
                  activeZoom();
                }}
              >
                <img
                  src="https://i.ibb.co/wgpxC7D/Dise-o-sin-t-tulo-17-1.png"
                  alt="zoom al texto"
                />
                Zoom al Formulario
              </button> */}
              <button
                className="btn-sia"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  e.preventDefault();
                  //handleAction(e);
                  activeZoom();
                  isTooltipOn();
                }}
              >
                <img
                  src="https://i.ibb.co/wgpxC7D/Dise-o-sin-t-tulo-17-1.png"
                  alt="zoom al texto"
                />
                Zoom al Texto
              </button>
              <button
                className="btn-sia"
                data-bs-toggle="modal"
                data-bs-target="#modal2"
                data-bs-dismiss="modal"
              >
                <img
                  src="https://i.ibb.co/F0g1Cg4/screen.png"
                  alt="elija el color de la pantalla"
                />
                Cambiar color de pantalla
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal2"
        tabIndex="-1"
        aria-hidden="true"
        aria-label="modalTitle2"
      >
        <div className="modal-dialog modal-dialog-centered /* modal-dialog-scrollable */">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
              aria-label="input de color"
                type="color"
                onChange={(e) =>
                  setChangeColor({ ...changeColor, background: e.target.value })
                }
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cerrar
              </button>
              <a
                className="btn btn-primary"
                href="#accesibilityModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                role="button"
                onClick={refreshPage}
              >
                Limpiar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
