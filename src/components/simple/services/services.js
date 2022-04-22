import { memo } from 'react';
import ServicesLayout from './services.layout';
import services from '../../../core/config/services';

const Services = ({ selectedItem, handleSelectItem }) => {
  return (
    <ServicesLayout
      items={services}
      selectedItem={selectedItem}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default memo(Services);
