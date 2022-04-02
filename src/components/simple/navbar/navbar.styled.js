import colors from '../../../core/constants/colors';
import stylesProps from '../../../core/constants/stylesProps';
import styled from 'styled-components';
import mediaSize from '../../../core/constants/mediaSize';

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${stylesProps.navBarHeight};
  top: 0;
  background-color: ${colors.Primary};
  color: ${colors.White};
  position: fixed;
  justify-content: space-between;
`;

export const NavbarItem = styled.div`
  display: flex;
  background-color: ${colors.Primary};
  height: ${stylesProps.navBarHeight};
  padding-inline: 15px;
  cursor: pointer;
  justify-content: center;
  transition: all 0.3s ease-out;
  :hover {
    filter: brightness(1.15);
  }
  ${({ active }) =>
    active &&
    `
    filter: brightness(1.15);
  `};
  @media ${mediaSize.desktop.max} {
    width: 260px;
  }
  @media ${mediaSize.laptopL.max} {
    width: 170px;
  }
  @media ${mediaSize.laptop.max} {
    width: 115px;
  }
  @media ${mediaSize.tablet.max} {
    width: 90px;
  }
  @media ${mediaSize.mobileL.max} {
    display: none;
  }
`;

export const NavbarItemsWrapper = styled.div`
  display: flex;
`;

export const SideNavbarWrapper = styled(NavbarWrapper)`
  flex-direction: column;
  justify-content: unset;
  height: 100%;
  transition: all 0.4s ease-out;
  ${({ toggleSideMenu }) => (toggleSideMenu ? `left: 0%` : 'left: 100%')};
  @media ${mediaSize.tablet.min} {
    left: 100%;
  }
`;

export const SideNavbarItem = styled(NavbarItem)`
  width: 100%;
  @media ${mediaSize.mobileL.max} {
    display: flex;
  }
`;

export const SideNavbarItemsWrapper = styled(NavbarItemsWrapper)`
  flex-direction: column;
`;

export const Title = styled.span`
  align-self: center;
`;

export const LogoWrapper = styled.div`
  height: ${stylesProps.logoSize};
  min-width: ${stylesProps.logoSize};
  margin-inline: 30px;
  align-self: center;
  background-image: url('/images/logo_without_back.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const MenuIcon = styled.div`
  display: none;
  @media ${mediaSize.mobileL.max} {
    display: flex;
  }
`;
export const CloseIcon = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  svg {
    width: 60px;
    height: 60px;
  }
`;
