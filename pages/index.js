import Home from '../src/components/ordinary/home/home';
import { useRouter } from 'next/router';
import Service from '../src/components/ordinary/service/service';
import services from '../src/core/config/services';

export default function MainPage() {
  const router = useRouter();
  const serviceName = router.query.service;
  const selectService = services.find((service) => service.altName === serviceName);
  return <>{serviceName ? <Service service={selectService}></Service> : <Home />}</>;
}
