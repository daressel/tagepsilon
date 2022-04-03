import { memo, useState } from 'react';
import Footer from '../../simple/footer/footer';
import Navbar from '../../simple/navbar/navbar';
import { ChildrenWrapper, MainWrapper } from './pageWrapper.styled';
import navbarItems from '../../../core/config/navbarItems';

const ContentWrapper = ({ children }) => (
  <>
    <MainWrapper>
      <Navbar data={navbarItems} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </MainWrapper>
  </>
);

export default memo(ContentWrapper);
