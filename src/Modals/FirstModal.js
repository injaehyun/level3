import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContent } from '../Styled/StyledComponents';

function FirstModal({ children, isOpen }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalBackground>,
    document.getElementById('modal-root')
  );
}

export default FirstModal;
