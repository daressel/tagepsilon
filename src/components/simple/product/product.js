import { memo } from 'react';
import ProductLayout from './product.layout';

const Product = ({ product, handleSelectItem }) => {
  return (
    <>
      <ProductLayout product={product} handleSelectItem={handleSelectItem} />
    </>
  );
};

export default memo(Product);
