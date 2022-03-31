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
  width: 200px;
  justify-content: center;
  transition: all 0.2s ease-in;
  :hover {
    filter: brightness(1.1);
  }
  ${({ active }) =>
    active &&
    `
    filter: brightness(1.1);
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

export const Title = styled.span`
  align-self: center;
`;

export const LogoWrapper = styled.div`
  height: ${stylesProps.logoSize};
  min-width: ${stylesProps.logoSize};
  margin-inline: 70px;
  align-self: center;
  background-image: url('/images/logo_without_back.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media ${mediaSize.desktop.max} {
    margin-inline: 40px;
  }
  @media ${mediaSize.laptopL.max} {
    margin-inline: 30px;
  }
  @media ${mediaSize.laptop.max} {
    margin-inline: 20px;
  }
  @media ${mediaSize.tablet.max} {
    margin-inline: 10px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
`;
