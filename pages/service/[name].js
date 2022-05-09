import { useRouter } from 'next/router';
import { memo } from 'react';
import Service from '../../src/components/ordinary/service/service';
import services from '../../src/core/config/services';
import htmlEnd from '../../src/core/constants/htmlEnd';

const ServicePage = () => {
  const router = useRouter();
  const { name } = router.query;
  const service = services.find(
    (service) => service.altName === (htmlEnd ? name?.split('.')[0] : name)
  );

  return <>{name && <Service service={service}></Service>}</>;
};

export default memo(ServicePage);
