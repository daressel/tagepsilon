import { memo, useState } from 'react';
import ServicesLayout from './services.layout';
import services from '../../../core/config/services';

const Products = () => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (index) => {};

  return (
    <ServicesLayout
      items={services}
      selectedItem={selectedItem}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default memo(Products);
