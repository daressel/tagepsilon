import { memo, useState } from 'react';
import NavbarLayout from './navbar.layout';

const Navbar = ({ handleToggleSideMenu, toggleSideMenu, data }) => {
  const [items, setItems] = useState(data);

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
