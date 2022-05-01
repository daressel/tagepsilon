import emailjs from '@emailjs/browser';
import { memo, useState } from 'react';
import { useModalContext } from '../../../core/context/modalContext';
import NavbarLayout from './navbar.layout';

const Navbar = ({ data }) => {
  const [items, setItems] = useState(data);
  const [modal, setModal] = useModalContext();

  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    console.log();
    toggleSideMenu
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden');
    setToggleSideMenu((prev) => !prev);
  };

  const handleActiveTab = (tabIndex) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        item.active = index === tabIndex;
        return item;
      })
    );
    document.body.style.overflow = 'unset';
  };

  const handleSendEmail = async () => {
    setModal('orderFillModal');
    // await emailjs.send(
    //   'service_tb0919p',
    //   'template_3ilyo5s',
    //   {
    //     from: 'from',
    //     to: 'to',
    //     message: 'message',
    //   },
    //   'cVjmmU6YUrHBvGCio'
    // );
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
