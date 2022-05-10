import { memo, useState, useEffect } from 'react';
import ServiceLayout from './service.layout';

let interval = setInterval(() => {}, 1000);

const Service = ({ service }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [blockInterval, setBlockInterval] = useState(false);

  const closeService = () => {
    handleSelectItem(-1);
  };

  const handleBlockInterval = () => {
    setBlockInterval(true);
    setTimeout(() => {
      setBlockInterval(false);
    }, 4000);
  };

  const handleClickArrow = (side) => {
    setActiveImage((prev) => {
      let result = prev + side;

      if (result === service.images.length) {
        result = 0;
      }

      if (result < 0) {
        result = service.images.length - 1;
      }
      return result;
    });
    handleBlockInterval();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    clearInterval(interval);
    interval =
      !blockInterval &&
      setInterval(() => {
        setActiveImage((prev) => {
          let result = prev + 1;

          if (result === service.images.length) {
            result = 0;
          }

          if (result < 0) {
            result = service.images.length - 1;
          }
          return result;
        });
      }, 2000);
    return () => clearInterval(interval);
  }, [blockInterval]);

  return (
    <>
      <ServiceLayout
        service={service}
        activeImage={activeImage}
        handleClickArrow={handleClickArrow}
        closeService={closeService}
      />
    </>
  );
};

export default memo(Service);
