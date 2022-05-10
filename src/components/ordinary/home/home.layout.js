import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import { HomeWrapper, SubTitle, Title, LogoWrapper } from './home.styled';
import CategoryProducts from '../../simple/categoryProducts/categoryProducts';
import AboutUs from '../about-us/about-us';

const HomeLayout = () => {
  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          <>
            <LogoWrapper />
            <AboutUs />
            <Title>ООО ЭПСИЛОН </Title>
            <SubTitle>предлагает выполнение работ</SubTitle>
            <CategoryProducts />
          </>
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(HomeLayout);
