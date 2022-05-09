import { memo, useState } from 'react';
import HomeLayout from './home.layout';
import services from '../../../core/config/services';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (name) => {
    setSelectedItem(services.find((service) => service.altName === name));
  };

  return <HomeLayout selectedItem={selectedItem} handleSelectItem={handleSelectItem} />;
};

export default memo(Home);
