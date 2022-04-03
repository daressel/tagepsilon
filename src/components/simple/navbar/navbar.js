import { memo, useState } from 'react';
import NavbarLayout from './navbar.layout';

const Navbar = ({ data }) => {
  const [items, setItems] = useState(data);

  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setToggleSideMenu((prev) => !prev);
  };

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
