import { memo, useState } from 'react';
import NavbarLayout from './navbar.layout';
import navbarItems from '../../../core/config/navbarItems';

const Navbar = () => {
  const [items, setItems] = useState(navbarItems);

  const handleActiveTab = (tabIndex) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        item.active = index === tabIndex;
        return item;
      })
    );
  };

  return <NavbarLayout navbarItems={items} handleActiveTab={handleActiveTab} />;
};

export default memo(Navbar);
