import emailjs from '@emailjs/browser';
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

  const handleSendEmail = async () => {
    await emailjs.send(
      'service_tb0919p',
      'template_3ilyo5s',
      {
        from: 'from',
        to: 'to',
        message: 'message',
      },
      'cVjmmU6YUrHBvGCio'
    );
  };

  return (
    <NavbarLayout
      navbarItems={items}
      handleActiveTab={handleActiveTab}
      handleToggleSideMenu={handleToggleSideMenu}
      toggleSideMenu={toggleSideMenu}
      handleSendEmail={handleSendEmail}
    />
  );
};

export default memo(Navbar);
