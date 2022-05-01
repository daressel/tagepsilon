import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 350px;
  height: 220px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  animation: animate 0.3s;
`;

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;
