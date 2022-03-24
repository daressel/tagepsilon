import { memo } from 'react';
import ContentWrapper from '../../smart/contentWrapper/contentWrapper';

const AboutLayout = () => {
  return <ContentWrapper tabKey={'about'}>AboutLayout</ContentWrapper>;
};

export default memo(AboutLayout);
