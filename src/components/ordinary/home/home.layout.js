import { memo } from 'react';
import PageWrapper from '../../smart/pageWrapper/pageWrapper';
import Services from '../../simple/services/services';
import { HomeWrapper, SubTitle, Title, LogoWrapper } from './home.styled';
import CategoryProducts from '../../simple/categoryProducts/categoryProducts';
import AboutUs from '../about-us/about-us';

const HomeLayout = ({ selectedItem, handleSelectItem }) => {
  return (
    <>
      <PageWrapper>
        <HomeWrapper>
          {!selectedItem && (
            <>
              <LogoWrapper />
              <AboutUs />
              <Title>ООО ЭПСИЛОН </Title>
              <SubTitle>предлагает выполнение работ</SubTitle>
            </>
          )}
          <CategoryProducts />
          <Services selectedItem={selectedItem} handleSelectItem={handleSelectItem} />
        </HomeWrapper>
      </PageWrapper>
    </>
  );
};

export default memo(HomeLayout);
