import { memo, useState, useEffect } from 'react';
import ProductLayout from './product.layout';

let interval = setInterval(() => {}, 1000);

const Product = ({ product, handleSelectItem }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [blockInterval, setBlockInterval] = useState(false);

  const handleBlockInterval = () => {
    setBlockInterval(true);
    setTimeout(() => {
      setBlockInterval(false);
    }, 4000);
  };

  const handleClickArrow = (side) => {
    setActiveImage((prev) => {
      let result = prev + side;

      if (result === product.images.length) {
        result = 0;
      }

      if (result < 0) {
        result = product.images.length - 1;
      }
      return result;
    });
    handleBlockInterval();
  };

  useEffect(() => {
    clearInterval(interval);
    interval =
      !blockInterval &&
      setInterval(() => {
        setActiveImage((prev) => {
          let result = prev + 1;
          if (result === product.images.length) {
            result = 0;
          }
          if (result < 0) {
            result = product.images.length - 1;
          }
          return result;
        });
      }, 2000);
    return () => clearInterval(interval);
  }, [blockInterval]);

  return (
    <>
      <ProductLayout
        product={product}
        handleSelectItem={handleSelectItem}
        activeImage={activeImage}
        handleClickArrow={handleClickArrow}
      />
    </>
  );
};

export default memo(Product);
