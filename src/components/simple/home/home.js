import { memo } from 'react';
import HomeLayout from './home.layout';
import ContentWrapper from '../../smart/contentWrapper/contentWrapper';

const Home = () => {
  return (
    <>
      <HomeLayout />
    </>
  );
};

export default memo(Home);
