import { memo, useState, useEffect } from 'react';
import Link from 'next/link';
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
import PageWrapper from '../../smart/pageWrapper/pageWrapper';

const ProductLayout = ({ product, activeImage, handleClickArrow }) => {
  return (
    <>
      <PageWrapper>
        <ProductWrapper>
          <HeadWrapper>
            <ProductTitle>{product.title}</ProductTitle>
            <Link href="/" passHref>
              <BackIcon>
                <Icon src="icons/cross_icon.png" />
              </BackIcon>
            </Link>
          </HeadWrapper>
          {product.images?.length && (
            <>
              <ProductImage image={product.images[activeImage]} />
              <ActionsWrapper>
                <ArrowImage onClick={() => handleClickArrow(-1)}>
                  <Icon src="icons/prev_arrow_icon.png" />
                </ArrowImage>
                <ArrowImage onClick={() => handleClickArrow(1)}>
                  <Icon src="icons/next_arrow_icon.png" />
                </ArrowImage>
              </ActionsWrapper>
            </>
          )}
          <ProductDescription>{product.description}</ProductDescription>
        </ProductWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(ProductLayout);
