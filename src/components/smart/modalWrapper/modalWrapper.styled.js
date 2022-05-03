import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const ModalContainer = styled.div`
  width: min(100vw, 400px);
  min-height: 150px;
  min-width: 215px;
  margin-top: 8%;
  padding: 30px;
  color: ${colors.White};
  background: ${colors.Primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  position: relative;
  animation: animate 0.3s;
`;

export const ModalBackground = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const CloseModalButton = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 55px;
  height: 55px;
`;
