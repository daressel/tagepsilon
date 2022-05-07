import { memo } from 'react';
import {
  CategoryProductsWrapper,
  MainCircle,
  ProductCircle,
  CategoryNavbar,
  NavbarItem,
  ImageMain,
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
  handleClickProduct,
  selectCategory,
  selectedCategory = 0,
}) => {
  console.log(products);
  return (
    <>
      <CategoryNavbar>
        {categories.map((category, index, allCategories) => {
          return (
            <>
              <NavbarItem
                onClick={() => selectCategory(category.altName)}
                active={selectedCategory === category.altName}
                width={`${100 / allCategories.length}%`}
              >
                {category.title}
              </NavbarItem>
            </>
          );
        })}
      </CategoryNavbar>
      <CategoryProductsWrapper>
        <MainCircle>
          <ImageMain image={`images/categories/${selectedCategory}.jpg`} />
        </MainCircle>
        {products.map((product, index) => {
          return (
            <>
              <ProductCircle
                onClick={handleClickProduct}
                left={positions[index].left}
                bottom={positions[index].bottom}
              >
                {product.shortName}
              </ProductCircle>
            </>
          );
        })}
        {/* <ProductCircle onClick={handleClickProduct} left="20%" bottom="20%">
          строительные металлоконструкции
        </ProductCircle>
        <ProductCircle left="80%" bottom="80%">
          строительные металлоконструкции
        </ProductCircle>
        <ProductCircle left="20%" bottom="80%">
          строительные металлоконструкции
        </ProductCircle>
        <ProductCircle left="80%" bottom="20%">
          строительные металлоконструкции
        </ProductCircle>
        <ProductCircle left="18%" bottom="50%">
          строительные металлоконструкции
        </ProductCircle>
        <ProductCircle left="82%" bottom="50%">
          строительные металлоконструкции
        </ProductCircle> */}
      </CategoryProductsWrapper>
    </>
  );
};

export default memo(CategoryProductsLayout);
