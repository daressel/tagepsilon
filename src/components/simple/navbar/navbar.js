import { memo, useState } from 'react';
import NavbarLayout from './navbar.layout';
import navbarItems from '../../../core/config/navbarItems';

const Navbar = ({ handleToggleSideMenu, toggleSideMenu }) => {
  const [items, setItems] = useState(navbarItems);

  const handleActiveTab = (tabIndex) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        item.active = index === tabIndex;
        return item;
      })
    );
    handleToggleSideMenu();
  };

  return (
    <NavbarLayout
      navbarItems={items}
      handleActiveTab={handleActiveTab}
      handleToggleSideMenu={handleToggleSideMenu}
      toggleSideMenu={toggleSideMenu}
    />
  );
};

export default memo(Navbar);
