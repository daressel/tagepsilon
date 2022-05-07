import { memo } from 'react';
import { CategoryProductsWrapper, MainCircle, ProductCircle } from './categoryProducts.styled';

const CategoryProductsLayout = ({ products, handleClickProduct }) => {
  return (
    <>
      <CategoryProductsWrapper>
        <MainCircle>
          <ProductCircle left="-50%" bottom="-70%">
            строительные металлоконструкции
          </ProductCircle>
          <ProductCircle left="-70%" bottom="80%">
            asdasd
          </ProductCircle>
          <ProductCircle left="90%" bottom="-70%">
            asdasd
          </ProductCircle>
          <ProductCircle left="90%" bottom="90%">
            asdasd
          </ProductCircle>
        </MainCircle>
      </CategoryProductsWrapper>
    </>
  );
};

export default memo(CategoryProductsLayout);
