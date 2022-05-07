import { memo } from 'react';
import CategoryProductsLayout from './categoryProducts.layout';

const CategoryProducts = () => {
  const handleClickProduct = (name) => {
    console.log(123);
  };
  return (
    <>
      <CategoryProductsLayout
        products={['name1', 'name2', 'name3', 'name4', 'name5']}
        handleClickProduct={handleClickProduct}
      />
    </>
  );
};

export default memo(CategoryProducts);
