import { memo } from 'react';
import HomeLayout from './home.layout';
import ContentWrapper from '../../smart/contentWrapper/contentWrapper';

const Home = () => {
  return <ContentWrapper Component={HomeLayout} tabIndex={1} />;
};

export default memo(Home);
