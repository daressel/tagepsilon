import { useContext, createContext } from 'react';

export const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);
