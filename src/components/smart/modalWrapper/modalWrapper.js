import { memo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalContainer, CloseModalButton } from './modalWrapper.styled';
import { modals } from '../../modals';
import { useModalContext } from '../../../core/context/modalContext';
import Icon from '../../ui/icon/icon';

const ModalWrapper = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [modal, setModal] = useModalContext();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    modal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [modal]);

  const closeModal = () => {
    setModal('');
  };

  const clickOutSideModal = (e) => {
    e.target?.id === 'modal-background' && setModal('');
  };

  return (
    isBrowser &&
    modal &&
    ReactDOM.createPortal(
      <>
        <ModalBackground id="modal-background" onMouseDown={clickOutSideModal}>
          <ModalContainer>
            <CloseModalButton onClick={closeModal}>
              <Icon src="icons/cross_icon.png" />
            </CloseModalButton>
            {modals[modal]}
          </ModalContainer>
        </ModalBackground>
      </>,
      document.getElementById('modal-root')
    )
  );
};

export default memo(ModalWrapper);
