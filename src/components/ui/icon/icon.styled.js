import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const IconWrapper = styled.div`
  min-height: 35px;
  min-width: 35px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url(${({ image }) => (image ? image : 'images/logo_without_back.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: invert(1);
`;
