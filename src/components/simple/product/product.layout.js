import { memo, useState, useEffect } from 'react';
import {
  ProductWrapper,
  ProductTitle,
  ProductImage,
  ProductDescription,
  BackIcon,
  HeadWrapper,
  ArrowImage,
  ActionsWrapper,
} from './product.styled';
import Icon from '../../ui/icon/icon';

const ProductLayout = ({ product, activeImage, handleClickArrow, closeProduct }) => {
  return (
    <>
      <ProductWrapper>
        <HeadWrapper>
          <ProductTitle>{product.title}</ProductTitle>
          <BackIcon onClick={closeProduct}>
            <Icon src="icons/cross_icon.png" />
          </BackIcon>
        </HeadWrapper>
        <ProductImage image={product.images[activeImage]} />
        <ActionsWrapper>
          <ArrowImage onClick={() => handleClickArrow(-1)}>
            <Icon src="icons/prev_arrow_icon.png" />
          </ArrowImage>
          <ArrowImage onClick={() => handleClickArrow(1)}>
            <Icon src="icons/next_arrow_icon.png" />
          </ArrowImage>
        </ActionsWrapper>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductWrapper>
    </>
  );
};

export default memo(ProductLayout);
