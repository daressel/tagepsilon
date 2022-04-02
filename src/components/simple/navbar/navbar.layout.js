import { memo } from 'react';
import {
  LogoWrapper,
  NavbarItemsWrapper,
  NavbarItem,
  NavbarWrapper,
  SideNavbarWrapper,
  SideNavbarItem,
  SideNavbarItemsWrapper,
  Title,
  MenuIcon,
  CloseIcon,
} from './navbar.styled';
import SvgIcon from '../../ui/svg/svg';

const NavbarLayout = ({
  navbarItems,
  handleActiveTab,
  handleToggleSideMenu,
  toggleSideMenu,
}) => {
  return (
    <>
      <NavbarWrapper>
        <LogoWrapper />
        <NavbarItemsWrapper>
          {navbarItems.map((navbarItem, index) => (
            <NavbarItem
              key={index}
              onClick={() => handleActiveTab(index)}
              active={navbarItem.active}
            >
              <Title>{navbarItem.title}</Title>
            </NavbarItem>
          ))}
        </NavbarItemsWrapper>
        <MenuIcon onClick={handleToggleSideMenu}>
          <SvgIcon src="icons/list_menu_icon.svg" />
        </MenuIcon>
      </NavbarWrapper>
      <SideNavbarWrapper toggleSideMenu={toggleSideMenu}>
        <LogoWrapper />
        <CloseIcon onClick={handleToggleSideMenu}>
          <SvgIcon src="icons/cross_icon.svg" />
        </CloseIcon>
        <SideNavbarItemsWrapper>
          {navbarItems.map((navbarItem, index) => (
            <SideNavbarItem
              key={index}
              onClick={() => handleActiveTab(index)}
              active={navbarItem.active}
            >
              <Title>{navbarItem.title}</Title>
            </SideNavbarItem>
          ))}
        </SideNavbarItemsWrapper>
      </SideNavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
