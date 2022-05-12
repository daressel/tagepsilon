import Home from '../src/components/ordinary/home/home';
import { useRouter } from 'next/router';
import services from '../src/core/config/services';
import Product from '../src/components/ordinary/product/product';

export default function MainPage() {
  const router = useRouter();
  const serviceName = router.query.product;
  const selectService = services.find((service) => service.altName === serviceName);
  console.log(selectService);
  return <>{serviceName ? <Product product={selectService}></Product> : <Home />}</>;
}
