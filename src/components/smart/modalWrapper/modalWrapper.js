import { memo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContainer } from './modalWrapper.styled';
import { modals } from '../../modals';
import { useModalContext } from '../../../core/context/modalContext';

const ModalWrapper = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [modal, setModal] = useModalContext();

  useEffect(() => {
    console.log('modal', modal);
    setIsBrowser(true);
  }, []);

  const closeModal = () => {
    setModal('');
  };

  return (
    isBrowser &&
    modal &&
    ReactDOM.createPortal(
      <>
        <ModalBackground>
          <ModalContainer onClick={closeModal}>{modals[modal]}</ModalContainer>
        </ModalBackground>
      </>,
      document.getElementById('modal-root')
    )
  );
};

export default memo(ModalWrapper);
