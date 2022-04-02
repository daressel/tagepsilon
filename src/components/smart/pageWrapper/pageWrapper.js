import { memo, useState } from 'react';
import Footer from '../../simple/footer/footer';
import Navbar from '../../simple/navbar/navbar';
import { ChildrenWrapper } from './pageWrapper.styled';

const ContentWrapper = ({ children }) => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setToggleSideMenu((prev) => !prev);
  };

  return (
    <>
      <Navbar
        handleToggleSideMenu={handleToggleSideMenu}
        toggleSideMenu={toggleSideMenu}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </>
  );
};

export default memo(ContentWrapper);
