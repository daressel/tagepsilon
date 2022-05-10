import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colors from '../../../core/constants/colors';

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  margin: 20px 10px;
  padding: 10px;
  text-align: center;
  width: min(60vw, 320px);
  height: min(60vw, 320px);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-image: url(${({ image }) => (image ? `/${image}` : '/images/logo_without_back.png')});
  :hover {
    box-shadow: 0 0 7px 6px ${colors.Primary};
  }
`;

export const DarkMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  opacity: 0.5;
  background-color: ${colors.Black};
`;

export const ServiceTitle = styled.div`
  color: ${colors.White};
  font-size: min(5vw, 22px);
  z-index: 5;
`;
