import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContent } from '../Styled/StyledComponents';

function SecondModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalBackground>,
    document.getElementById('modal-root')
  );
}

export default SecondModal;
