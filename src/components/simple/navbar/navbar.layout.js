import { memo } from 'react';
import {
  LogoWrapper,
  NavbarItemsWrapper,
  NavbarItem,
  NavbarWrapper,
  Title,
} from './navbar.styled';

const NavbarLayout = ({ navbarItems, handleActiveTab }) => {
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
      </NavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
