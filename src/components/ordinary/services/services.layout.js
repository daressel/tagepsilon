import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import {
  ServiceWrapper,
  ServicesWrapper,
  ServiceTitle,
  DarkMask,
} from './services.styled';

import Product from '../../simple/product/product';

const ServicesLayout = ({ items, selectedItem, handleSelectItem }) => {
  return (
    <>
      <PageWrapper>
        <ServicesWrapper>
          {!selectedItem && (
            <>
              {items.map((item, index) => (
                <ServiceWrapper
                  key={item.altName}
                  image={item.images[0]}
                  onClick={() => handleSelectItem(index)}
                >
                  <ServiceTitle>{item.title}</ServiceTitle>
                  <DarkMask />
                </ServiceWrapper>
              ))}
            </>
          )}
          {selectedItem && (
            <Product
              product={selectedItem}
              handleSelectItem={handleSelectItem}
            />
          )}
        </ServicesWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(ServicesLayout);
