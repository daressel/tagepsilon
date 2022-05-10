import { memo } from 'react';
import {
  CategoryProductsWrapper,
  MainCircle,
  ProductCircle,
  CategoryNavbar,
  NavbarItem,
  ImageMain,
  CategoryContentWrapper,
} from './categoryProducts.styled';

const positions = [
  {
    left: '20%',
    bottom: '20%',
  },
  {
    left: '80%',
    bottom: '80%',
  },
  {
    left: '20%',
    bottom: '80%',
  },
  {
    left: '80%',
    bottom: '20%',
  },
  {
    left: '20%',
    bottom: '50%',
  },
  {
    left: '80%',
    bottom: '50%',
  },
];

const CategoryProductsLayout = ({
  categories = [],
  products = [],
  selectCategory,
  selectedCategory = 0,
  handleClickService,
}) => {
  return (
    <>
      <CategoryContentWrapper>
        <CategoryNavbar id="category-navbar">
          {categories.map((category, index, allCategories) => {
            return (
              <NavbarItem
                onClick={() => selectCategory(category.altName)}
                active={selectedCategory === category.altName}
                width={`${100 / allCategories.length}%`}
                key={index}
              >
                {category.title}
              </NavbarItem>
            );
          })}
        </CategoryNavbar>
        <CategoryProductsWrapper>
          <MainCircle>
            <ImageMain image={`images/categories/${selectedCategory}.jpg`} />
          </MainCircle>
          {products.map((product, index) => {
            return (
              <ProductCircle
                onClick={() => handleClickService(product.altName)}
                left={positions[index].left}
                bottom={positions[index].bottom}
                key={index}
              >
                {product.shortName}
              </ProductCircle>
            );
          })}
        </CategoryProductsWrapper>
      </CategoryContentWrapper>
    </>
  );
};

export default memo(CategoryProductsLayout);
