import { memo } from 'react';
import ServicesLayout from './services.layout';
import services from '../../../core/config/services';

const Services = ({ selectedItem, handleSelectItem }) => {
  const filteredServices = services.filter((service) => service.type !== 'category');
  return (
    <ServicesLayout
      items={filteredServices}
      selectedItem={selectedItem}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default memo(Services);
