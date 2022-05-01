import { ModalContext } from '../src/core/context/modalContext';
import ModalWrapper from '../src/components/smart/modalWrapper/modalWrapper';
import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [modal, setModal] = useState('');

  return (
    <>
      <ModalContext.Provider value={[modal, setModal]}>
        <Component {...pageProps} />
        <ModalWrapper />
      </ModalContext.Provider>
    </>
  );
}

export default MyApp;
