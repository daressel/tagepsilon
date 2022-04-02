import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import {
  ServiceWrapper,
  ServicesWrapper,
  ServiceTitle,
  DarkMask,
} from './services.styled';

const ServicesLayout = ({ items, selectedItem }) => {
  return (
    <>
      <PageWrapper>
        <ServicesWrapper>
          {!selectedItem &&
            items.map((item) => (
              <ServiceWrapper>
                <ServiceTitle>{item.title}</ServiceTitle>
                <DarkMask />
              </ServiceWrapper>
            ))}
          {selectedItem && <ProductWrapper selectedItem={selectedItem} />}
        </ServicesWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(ServicesLayout);
