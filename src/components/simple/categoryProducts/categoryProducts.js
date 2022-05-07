import { memo, useState } from 'react';
import CategoryProductsLayout from './categoryProducts.layout';
import services from '../../../core/config/services';

const categories = services.filter((service) => service.type === 'category');
const products = services.filter((service) => service.type !== 'category');

const CategoryProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const selectCategory = (name) => {
    console.log(name);
    setSelectedCategory(name);
  };

  const handleClickProduct = (name) => {
    console.log(123);
  };

  return (
    <>
      <CategoryProductsLayout
        categories={categories}
        products={products.filter((product) => product.from === selectedCategory)}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
        handleClickProduct={handleClickProduct}
      />
    </>
  );
};

export default memo(CategoryProducts);
