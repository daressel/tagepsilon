import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';
import styled from 'styled-components';
import mediaSize from '../../../core/constants/mediaSize';

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 10;
  height: ${stylesProps.navBarHeight};
  top: 0;
  background-color: ${colors.Primary};
  color: ${colors.White};
  /* position: fixed; */
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.div`
  display: flex;
  background-color: ${colors.Primary};
  height: ${stylesProps.navBarHeight};
  padding-inline: 15px;
  cursor: pointer;
  justify-content: center;
  width: 100%;
  transition: all 0.3s ease-out;
  :hover {
    background-color: ${colors.PrimaryHover};
  }
  ${({ active }) =>
    active &&
    `
    background-color: ${colors.PrimaryHover};
  `};
`;

export const NavbarItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  @media ${mediaSize.mobileL.max} {
    display: none;
  }
`;

export const SideNavbarWrapper = styled(NavbarWrapper)`
  flex-direction: column;
  justify-content: unset;
  height: 100%;
  z-index: 15;
  position: fixed;
  transition: all 0.4s ease-out;
  ${({ toggleSideMenu }) =>
    toggleSideMenu ? `left: 0%; overflow-y: hidden;` : 'left: 100%; overflow-y: auto'};
  @media ${mediaSize.tablet.min} {
    left: 100%;
  }
`;

export const SideNavbarItem = styled(NavbarItem)`
  width: 100%;
`;

export const SideNavbarItemsWrapper = styled(NavbarItemsWrapper)`
  flex-direction: column;
  @media ${mediaSize.mobileL.max} {
    display: flex;
  }
`;

export const Title = styled.span`
  align-self: center;
`;

export const LogoWrapper = styled.div`
  height: ${stylesProps.logoSize};
  cursor: pointer;
  min-width: ${stylesProps.logoSize};
  margin-inline: 30px;
  align-self: center;
  background-image: url('images/logo_without_back.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  @media ${mediaSize.mobileL.max} {
    display: flex;
  }
`;
export const CloseIcon = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
`;

export const CallIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  min-width: 100px;
  padding: 15px;
  height: ${stylesProps.navBarHeight};
  background-color: ${colors.Primary};
  transition: all 0.3s ease-out;
  :hover {
    background-color: ${colors.PrimaryHover};
  }
`;
