import { memo } from 'react';
import { LogoWrapper, NavbarItem, NavbarWrapper, Title } from './navbar.styled';
import navbarItems from '../../../core/config/navbarItems';

const NavbarLayout = () => {
  return (
    <>
      <NavbarWrapper>
        <LogoWrapper />
        {navbarItems.map((navbarItem, index) => (
          <NavbarItem key={index}>
            <Title>{navbarItem.title}</Title>
          </NavbarItem>
        ))}
      </NavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
