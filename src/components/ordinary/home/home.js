import { memo, useState } from 'react';
import HomeLayout from './home.layout';
import services from '../../../core/config/services';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (index) => {
    window.scrollTo(0, 0);
    setSelectedItem(services[index]);
  };

  return (
    <HomeLayout
      selectedItem={selectedItem}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default memo(Home);
