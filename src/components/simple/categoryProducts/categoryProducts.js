import { memo, useState } from 'react';
import CategoryProductsLayout from './categoryProducts.layout';
import services from '../../../core/config/services';

const categories = services.filter((service) => service.type === 'category');
const products = services.filter((service) => service.type !== 'category');

const CategoryProducts = ({ handleSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].altName);

  const selectCategory = (name) => {
    setSelectedCategory(name);
    document.getElementById('category-navbar').scrollIntoView();
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
        handleSelectItem={handleSelectItem}
      />
    </>
  );
};

export default memo(CategoryProducts);
