import { memo, useEffect, useState } from 'react';
import Footer from '../../simple/footer/footer';
import Navbar from '../../simple/navbar/navbar';
import { ChildrenWrapper, MainWrapper, ScrollToTop } from './pageWrapper.styled';
import navbarItems from '../../../core/config/navbarItems';
import Icon from '../../ui/icon/icon';

const ContentWrapper = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const scrollToTop = (e) => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setReady(true);
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener('scroll', handleScroll, true);
  }, []);

  const handleScroll = () => {
    window.pageYOffset ? setShowToTop(true) : setShowToTop(false);
  };

  return (
    <>
      {ready && (
        <>
          <MainWrapper>
            <Navbar data={navbarItems} />
            <ChildrenWrapper>{children}</ChildrenWrapper>
            <Footer />
          </MainWrapper>
          {showToTop && (
            <ScrollToTop onClick={scrollToTop}>
              <Icon src="icons/up_arrow.png" />
            </ScrollToTop>
          )}
        </>
      )}
    </>
  );
};

export default memo(ContentWrapper);
