import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${stylesProps.navBarHeight};
  top: 0;
  background-color: ${colors.Primary};
  color: ${colors.White};
  position: fixed;
  justify-content: center;
`;

export const NavbarItem = styled.div`
  display: flex;
  background-color: ${colors.Primary};
  height: ${stylesProps.navBarHeight};
  padding-inline: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    filter: brightness(1.1);
  }
`;

export const Title = styled.span`
  align-self: center;
`;

export const LogoWrapper = styled.div`
  height: ${stylesProps.logoSize};
  width: ${stylesProps.logoSize};
  position: absolute;
  top: ${stylesProps.logoPos};
  left: ${stylesProps.logoPos};
  background-image: url('/images/logo_without_back.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
