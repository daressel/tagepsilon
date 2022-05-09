import { memo } from 'react';
import Link from 'next/link';
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

// const htmlEnd = '.html';
const htmlEnd = '';

const CategoryProductsLayout = ({
  categories = [],
  products = [],
  selectCategory,
  selectedCategory = 0,
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
              <Link href={`service/${product.altName}${htmlEnd}`} passHref key={index}>
                <ProductCircle left={positions[index].left} bottom={positions[index].bottom}>
                  {product.shortName}
                </ProductCircle>
              </Link>
            );
          })}
        </CategoryProductsWrapper>
      </CategoryContentWrapper>
    </>
  );
};

export default memo(CategoryProductsLayout);
