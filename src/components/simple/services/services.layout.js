import { memo } from 'react';
import {
  ServiceWrapper,
  ServicesWrapper,
  ServiceTitle,
  DarkMask,
} from './services.styled';

import Product from '../product/product';

const ServicesLayout = ({ items, selectedItem, handleSelectItem }) => {
  return (
    <>
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
          <Product product={selectedItem} handleSelectItem={handleSelectItem} />
        )}
      </ServicesWrapper>
    </>
  );
};

export default memo(ServicesLayout);
