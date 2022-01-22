import React from "react";

export const ModalSia = () => {
  return (
    <>
      <button
        type="button"
        class="btn-accesibility"
        data-bs-toggle="modal"
        data-bs-target="#accesibilityModal"
      >
        <img
          src="https://i.ibb.co/9HHy2Q8/Dise-o-sin-t-tulo-5-2.png"
          alt="botón de accesibilidad"
        />
      </button>

      <div
        class="modal fade modal-sia"
        id="accesibilityModal"
        tabindex="-1"
        aria-labelledby="accesibilityModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="cerrar"
              ></button>
            </div>
            <div class="modal-body">
                <button class="btn-sia"><img src="https://i.ibb.co/0QC1rGZ/luna.png" alt="luna" />Modo oscuro<br/>(Contraste)</button>
                <button class="btn-sia"><img src="https://i.ibb.co/wgpxC7D/Dise-o-sin-t-tulo-17-1.png" alt="zoom al texto"/>Zoom al Texto</button>
                <button class="btn-sia"><img src="https://i.ibb.co/F0g1Cg4/screen.png" alt="elija el color de la pantalla"/>Cambiar color de pantalla</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
