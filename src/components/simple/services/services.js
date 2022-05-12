import { memo } from 'react';
import ServicesLayout from './services.layout';
import services from '../../../core/config/services';
const products = services.filter((service) => service.type !== 'category');

const Services = ({ selectedItem, handleSelectItem }) => {
  return (
    <ServicesLayout
      items={products}
      selectedItem={selectedItem}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default memo(Services);
