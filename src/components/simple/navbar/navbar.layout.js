import { memo } from 'react';
import {
  LogoWrapper,
  NavbarItemsWrapper,
  NavbarItem,
  NavbarWrapper,
  Title,
  MenuItem,
} from './navbar.styled';
import SvgIcon from '../../ui/svg/svg';

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
        <MenuItem>
          <SvgIcon src="icons/list_menu_icon.svg" />
        </MenuItem>
      </NavbarWrapper>
    </>
  );
};

export default memo(NavbarLayout);
