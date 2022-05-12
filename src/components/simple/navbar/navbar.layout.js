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
import htmlEnd from '../../../core/constants/htmlEnd';

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
        <Link href="/" passHref>
          <LogoWrapper />
        </Link>
        <NavbarItemsWrapper>
          {navbarItems.map((navbarItem, index) => (
            <Link
              href={navbarItem.href !== '/' ? `${navbarItem.href}${htmlEnd}` : '/'}
              passHref
              key={index}
            >
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
            Оставить заявку
          </CallIcon>
        </NavbarItemsWrapper>
        <MenuIcon onClick={handleToggleSideMenu}>
          <Icon src="icons/list_menu_icon.png" />
        </MenuIcon>
      </NavbarWrapper>
      <SideNavbarWrapper toggleSideMenu={toggleSideMenu}>
        <Link href="/" passHref>
          <LogoWrapper />
        </Link>
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
            Оставить заявку
          </CallIcon>
        </SideNavbarItemsWrapper>
      </SideNavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
