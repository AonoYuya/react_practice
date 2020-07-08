import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

function Modal() {
  return (
    <div id="modal">
      <div className="modal js-modal">
        <div className="modal__bg js-modal-close"></div>
        <div className="modal__content">
          <p>This is a Modal!!</p>
          <a className="js-modal-close">閉じる</a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
