import { memo } from 'react';
import Footer from '../../simple/footer/footer';
import Navbar from '../../simple/navbar/navbar';
import { ChildrenWrapper } from './pageWrapper.styled';

const ContentWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </>
  );
};

export default memo(ContentWrapper);
