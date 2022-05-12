import { memo, useState } from 'react';
import HomeLayout from './home.layout';
import services from '../../../core/config/services';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState();

  // const handleSelectItem = (name) => {
  //   window.scrollTo(0, 0);
  //   setSelectedItem(services.find((service) => service.altName === name));
  // };

  const handleSelectItem = (name) => {
    router.push({
      query: { product: name },
    });
    // window.scrollTo(0, 0);
  };

  return <HomeLayout selectedItem={selectedItem} handleSelectItem={handleSelectItem} />;
};

export default memo(Home);
