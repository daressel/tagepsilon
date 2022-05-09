import { useRouter } from 'next/router';
import { memo } from 'react';
import Service from '../../src/components/ordinary/service/service';
import services from '../../src/core/config/services';

const ServicePage = () => {
  const router = useRouter();
  const { name } = router.query;
  const service = services.find((service) => service.altName === name);

  return <>{name && <Service service={service}></Service>}</>;
};

export default memo(ServicePage);
