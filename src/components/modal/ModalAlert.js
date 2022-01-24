import React from "react";
import '../../Scss/Layout/ModalAlert.scss'

export const ModalAlert = ({ body }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
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
          <i id="check" className="bi bi-check-lg" /><p>{body}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="continue" data-bs-dismiss="modal">
              Continuar
            </button>
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
