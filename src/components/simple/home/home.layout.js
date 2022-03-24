import { memo } from 'react';
import ContentWrapper from '../../smart/contentWrapper/contentWrapper';

const HomeLayout = () => {
  return <ContentWrapper tabKey={'home'}>HomeLayout</ContentWrapper>;
};

export default memo(HomeLayout);
