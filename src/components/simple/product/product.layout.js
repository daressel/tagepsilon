import { memo, useState } from 'react';
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

const ProductLayout = ({ product, handleSelectItem }) => {
  const [activeImage, setActiveImage] = useState(0);

  const closeProduct = () => {
    handleSelectItem(-1);
  };

  const handleClickArrow = (side) => {
    if (
      (activeImage === 0 && side < 0) ||
      (activeImage === product.images.length - 1 && side > 0)
    )
      return;

    setActiveImage((prev) => prev + side);
  };

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
