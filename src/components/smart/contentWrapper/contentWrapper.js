import { memo } from 'react';
import ContentWrapperLayout from './contentWrapper.layout';

const ContentWrapper = ({ Component, tabIndex }) => {
  return <ContentWrapperLayout Component={Component} tabIndex={tabIndex} />;
};

export default memo(ContentWrapper);
