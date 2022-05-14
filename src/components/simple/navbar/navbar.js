import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { useModalContext } from '../../../core/context/modalContext';
import NavbarLayout from './navbar.layout';

const Navbar = ({ data }) => {
  const router = useRouter();
  const [items, setItems] = useState(data);
  const [modal, setModal] = useModalContext();

  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    toggleSideMenu
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden');
    setToggleSideMenu((prev) => !prev);
  };

  const handleActiveTab = (tabIndex) => {
    localStorage.setItem('activeNav', tabIndex);
    setToggleSideMenu(false);
    document.body.style.overflow = 'unset';
  };

  const handleClickLogo = () => {
    localStorage.setItem('activeNav', 0);
    document.body.style.overflow = 'unset';
    router.push('/');
  };

  const handleOpenModal = async (name) => {
    setModal(name);
  };

  return (
    <NavbarLayout
      navbarItems={items}
      handleClickLogo={handleClickLogo}
      handleActiveTab={handleActiveTab}
      handleToggleSideMenu={handleToggleSideMenu}
      toggleSideMenu={toggleSideMenu}
      handleOpenModal={handleOpenModal}
    />
  );
};

export default memo(Navbar);
