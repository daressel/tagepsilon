import { memo, useState } from 'react';
import CategoryProductsLayout from './categoryProducts.layout';
import services from '../../../core/config/services';
import { useRouter } from 'next/router';

const categories = services.filter((service) => service.type === 'category');
const products = services.filter((service) => service.type !== 'category');

const CategoryProducts = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].altName);

  const selectCategory = (name) => {
    setSelectedCategory(name);
    document.getElementById('category-navbar').scrollIntoView();
  };

  const handleClickService = (name) => {
    router.push({
      query: { service: name },
    });
  };

  return (
    <>
      <CategoryProductsLayout
        categories={categories}
        products={products.filter((product) => product.from === selectedCategory)}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
        handleClickService={handleClickService}
      />
    </>
  );
};

export default memo(CategoryProducts);
