import React from 'react';

function ModalApp({ title, description, source, extraInfo, closeModal }) {
     
    return (
    <>
      <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}></div>
      <div className="modal fade show" style={{ display: 'block', zIndex: 1051 }} tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <img src={source} alt="" className="card-img-top" />
              <p>{description}</p>
              {/* Mostramos la información adicional solo si existe */}
              {extraInfo && (
                <div>
                  <h6>Información adicional:</h6>
                  <p>{extraInfo}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalApp;
