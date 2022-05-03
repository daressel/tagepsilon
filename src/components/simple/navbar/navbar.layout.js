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
  CallIcon,
} from './navbar.styled';
import Link from 'next/link';
import Icon from '../../ui/icon/icon';

// const htmlEnd = '.html';
const htmlEnd = '';

const NavbarLayout = ({
  navbarItems,
  handleActiveTab,
  handleToggleSideMenu,
  toggleSideMenu,
  handleOpenModal,
}) => {
  return (
    <>
      <NavbarWrapper>
        <LogoWrapper />
        <NavbarItemsWrapper>
          {navbarItems.map((navbarItem, index) => (
            <Link href={`${navbarItem.href}${htmlEnd}`} passHref key={index}>
              <NavbarItem onClick={() => handleActiveTab(index)} active={navbarItem.active}>
                <Title>{navbarItem.title}</Title>
              </NavbarItem>
            </Link>
          ))}
          <NavbarItem onClick={() => handleOpenModal('questionnaireModal')}>
            <Title>Пройти опрос</Title>
          </NavbarItem>
          <CallIcon onClick={() => handleOpenModal('requestModal')}>
            <Icon src="icons/contact_icon.png" />
          </CallIcon>
        </NavbarItemsWrapper>
        <MenuIcon onClick={handleToggleSideMenu}>
          <Icon src="icons/list_menu_icon.png" />
        </MenuIcon>
      </NavbarWrapper>
      <SideNavbarWrapper toggleSideMenu={toggleSideMenu}>
        <LogoWrapper />
        <CloseIcon onClick={handleToggleSideMenu}>
          <Icon src="icons/cross_icon.png" />
        </CloseIcon>
        <SideNavbarItemsWrapper>
          {navbarItems.map((navbarItem, index) => (
            <Link href={`${navbarItem.href}${htmlEnd}`} passHref key={index}>
              <SideNavbarItem onClick={() => handleActiveTab(index)} active={navbarItem.active}>
                <Title>{navbarItem.title}</Title>
              </SideNavbarItem>
            </Link>
          ))}
          <SideNavbarItem onClick={() => handleOpenModal('questionnaireModal')}>
            <Title>Пройти опрос</Title>
          </SideNavbarItem>
          <CallIcon onClick={() => handleOpenModal('requestModal')}>
            <Icon src="icons/contact_icon.png" />
          </CallIcon>
        </SideNavbarItemsWrapper>
      </SideNavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
